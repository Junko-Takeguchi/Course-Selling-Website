import express from "express";
import {User, Course} from "../dB/index.js";
import {secret, verifyToken} from "../Middlewares/authToken.js";
import jwt from 'jsonwebtoken';


const router = express.Router();

function createToken(USER) {
    const toEncrypt = {username: USER.username};
    return jwt.sign(toEncrypt,secret,{expiresIn: '1h'});
}

router.post('/signup', async (req, res) => {
    // logic to sign up user
    const {username, password} = req.body;
    const existingUser = await User.findOne({username : username});
    if(existingUser){
        res.status(401).send('existing admin');
    }
    else{
        const newUser = new User({username: username, password : password});
        await newUser.save();
        const token = createToken(newUser);
        res.json({
            message: 'Admin created successfully',
            token
        });
    }
});

router.post('/login', async (req, res) => {
    // logic to log in user
    const {username, password} = req.headers;
    const existingUser = await User.findOne({username: username, password: password});
    if(existingUser){
        const token = createToken(existingUser);
        res.json({
            message: 'Logged in successfully',
            token
        });
    }
});

router.get('/courses', verifyToken, async (req, res) => {
    // logic to list all courses
    const courses = await Course.find({published : true});
    res.json(courses);
});

router.get('/courses/:courseId', verifyToken, async (req,res)=>{
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    res.json(course);
});

router.post('/courses/:courseId', verifyToken, async (req, res) => {
    // logic to purchase a course
    const course = await Course.findById(req.params.courseId);
    if(!course){
        res.status(401).send('Course not found');
    }
    const user = await User.findOne({username: req.user.username});
    if(!user){
        res.status(401).send('User not found');
    }
    user.purchasedCourses.push(course);
    await user.save();
    res.json({ message: 'Course purchased successfully' });
});

router.get('/purchasedCourses', verifyToken, async (req, res) => {
    // logic to view purchased courses
    const user = await User.findOne({username: req.user.username}).populate('purchasedCourses');
    res.json(user.purchasedCourses);
});
export default router;