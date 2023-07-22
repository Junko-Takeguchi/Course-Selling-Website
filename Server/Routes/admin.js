import express from "express";
import {Admin, Course} from "../dB/index.js";
import {secret, verifyToken} from "../Middlewares/authToken.js";
import jwt from 'jsonwebtoken';


const router = express.Router();

function createToken(USER) {
    const toEncrypt = {username: USER.username};
    return jwt.sign(toEncrypt,secret,{expiresIn: '1h'});
}

router.post('/signup', async (req, res) => {
    // logic to sign up admin
    const {username, password} = req.body;
    const existingAdmin = await Admin.findOne({username});
    if(existingAdmin){
        res.status(401).send('existing admin');
    }
    else{
        const newAdmin = new Admin({username: username, password : password});
        await newAdmin.save();
        const token = createToken(newAdmin);
        res.json({
            message: 'Admin created successfully',
            token
        });
    }
});

router.post('/login', async (req, res) => {
    // logic to log in admin
    const {username, password} = req.headers;
    const existingAdmin = await Admin.findOne({username: username, password: password});
    if(existingAdmin){
        const token = createToken(existingAdmin);
        res.json({
            message: 'Logged in successfully',
            token
        });
    }
});

router.post('/courses', verifyToken, async (req, res) => {
    // logic to create a course
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.json({
        message: 'Course created successfully', courseId: newCourse.id
    });
});

router.put('/courses/:courseId', verifyToken, async (req, res) => {
    // logic to edit a course
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, {new: true});
    if(course){
        res.json({ message: 'Course updated successfully' });
    }
    else{
        res.send('cannot find course');
    }
});

router.get("/courses/:courseId",verifyToken, async (req,res)=>{
    const course = await Course.findById(req.params.courseId);
    if(!course){
        res.status(401).send('Course not found');
    }
    res.json(course);
});

router.get('/courses', verifyToken, async (req, res) => {
    // logic to get all courses
    const courses = await Course.find({});
    res.json(courses);
});
export default router;