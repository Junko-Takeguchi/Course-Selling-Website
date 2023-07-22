import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button, Card, CardActions, CardContent, CardMedia, TextField, Typography} from "@mui/material";
import axios from "axios";
import Navbar from "./navbar.jsx";



function Course(){
    const {courseId} = useParams();
    const [course, setCourse] = useState({});
    useEffect(()=>{
        fetch("http://localhost:3000/admin/courses/" + courseId,{
            method: 'GET',
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then((data) => {
                setCourse(data);
            })
    },[])
    const [title, setTitle] = useState(course.title);
    const [imageLink, setimageLink] = useState(course.imageLink);
    const [description, setDescription] = useState(course.description);
    const [price, setPrice] = useState(course.price);

    return (
        <div style={{display:"flex", justifyContent: "center", alignItems:"center", width: "100vw", height: "100vh", marginTop: "70px"}}>
            <Navbar></Navbar>
            <DisplayCourseInfo course={course}></DisplayCourseInfo>
            <CourseCard course={course}
                        courseId={courseId}
                        setCourse={setCourse}
                        title={title}
                        setTitle={setTitle}
                        imageLink={imageLink}
                        setImageLink={setimageLink}
                        description={description}
                        setDescription={setDescription}
                        price={price}
                        setPrice={setPrice}
            ></CourseCard>
        </div>
    )
}
function DisplayCourseInfo({course}){
    return (
        <Card style={{maxWidth: '40vw' }}>
            <CardMedia
                component="img"
                src={course.imageLink}
                alt={course.title}
                style={{ maxWidth: '100%', maxHeight: '300px' }}
            />
            <CardContent>
                <Typography variant="h6" align="center">
                    {course.title}
                </Typography>
                <Typography variant="subtitle1" align="center">
                    {course.description}
                </Typography>
                <Typography variant="h6" align="center">
                    {course.price}
                </Typography>
            </CardContent>
        </Card>
    )
}
function CourseCard(props) {
    return <Card sx={{maxWidth: "50vw"}}>
        {/*<CardMedia*/}
        {/*    sx={{height: 140}}*/}
        {/*    /!* eslint-disable-next-line react/prop-types *!/*/}
        {/*    image={props.course.imageLink}*/}
        {/*    title={props.course.title}*/}
        {/*/>*/}
        <CardContent>
            <TextField
                fullWidth={true}
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={props.title}
                onChange={(e)=>{
                    props.setTitle(e.target.value);
                }}
            />
            <TextField
                fullWidth={true}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                value={props.description}
                onChange={(e)=>{
                    props.setDescription(e.target.value);
                }}
            />
            <TextField
                fullWidth={true}
                id="outlined-basic"
                label="Image Link"
                variant="outlined"
                value={props.imageLink}
                onChange={(e)=>{
                    props.setImageLink(e.target.value);
                }}
            />
            <TextField
                fullWidth={true}
                id="outlined-basic"
                label="Price"
                variant="outlined"
                value={props.price}
                onChange={(e)=>{
                    props.setPrice(e.target.value);
                }}
            />
        </CardContent>
        <CardActions>
            <Button size="small" onClick={(e)=>{
                axios.put("http://localhost:3000/admin/courses/"+props.courseId,{
                    title: props.title,
                    description: props.description,
                    price: props.price,
                    imageLink: props.imageLink,
                    published: true
                }, {
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                });
                const updatedCourse = {
                    title: props.title,
                    description: props.description,
                    price: props.price,
                    imageLink: props.imageLink,
                    published: true
                }
                props.setCourse(updatedCourse);
            }}>Update</Button>
        </CardActions>
    </Card>;
}
export default Course;