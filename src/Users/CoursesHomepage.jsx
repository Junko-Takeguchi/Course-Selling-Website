import {useEffect, useState} from "react";
import axios from "axios";
import Navbar from "./Navbar.jsx";
import {Grid} from "@mui/material";
import CourseCard from "./CourseCard.jsx";

function UserCourses() {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/users/courses",{
            headers:{
                "Authorization": "Bearer "+localStorage.getItem("token")
            }
        }).then((res)=>{
                setCourses(res.data);
        }).catch((err)=>console.log(err));
    },[]);
    return <div style={{display: "flex", flexWrap:"wrap"}}>
        <Navbar></Navbar>
        {courses.map((course)=>{
            return <Grid item lg={3}><CourseCard course={course} buttonText="Buy Course"></CourseCard></Grid>
        })}
    </div>
}
export default UserCourses