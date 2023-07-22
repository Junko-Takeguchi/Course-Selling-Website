import {useEffect, useState} from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Navbar from "./navbar.jsx";


function Courses(){
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/admin/courses',{
            method : "GET",
            headers : {
                Authorization: "Bearer "+ localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then((data)=>{
                setCourses(data);
            })
    },[]);
    return (
        <Grid container style={{marginTop: 30}}>
            <Navbar></Navbar>
            {courses.map((course) => {
                return <Grid item lg={3}><CourseCard course={course}></CourseCard></Grid>
            })}
    </Grid>)


}
function CourseCard({course}){
    const navigate = useNavigate();
    return <Card style={{
        margin: 50,
        marginLeft: 100,
        width: 300,
        minHeight: 200,
    }}>
            <CardMedia
                sx={{ height: 140 }}
                image={course.imageLink}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {course.description}
                </Typography>
            </CardContent>
        <CardActions>
            <Button
                size="small"
                onClick ={() => {
                    navigate("/admin/course/" + course._id);
                }}
            >Edit</Button>
        </CardActions>
        </Card>
}

export default Courses;