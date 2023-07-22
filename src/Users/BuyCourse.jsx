import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar.jsx";
import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";

function BuyCourse() {
    const [course, setCourse] = useState({});
    const {courseId} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3000/users/courses/'+ courseId,{
            headers : {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((res)=>{
            // console.log(res.data);
            setCourse(res.data);
        }).catch((err)=>console.log(err))
    },[]);
    return(
        <div>
            <Navbar></Navbar>
            <Card style={{maxWidth: '40vw'}}>
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
            <Button variant="contained" size="large" onClick={()=>{
                axios.post('http://localhost:3000/users/courses/' + courseId,{},{
                    headers: {
                        "Authorization" : "Bearer " + localStorage.getItem("token")
                    }
                }).catch((err)=>console.log(err));
                navigate('/users/purchasedCourses');
            }}>BUY</Button>
        </div>
    )
}
export default BuyCourse;