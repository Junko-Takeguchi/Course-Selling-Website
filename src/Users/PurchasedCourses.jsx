import {useEffect, useState} from "react";
import axios from "axios";
import Navbar from "./Navbar.jsx";
import {Grid} from "@mui/material";
import CourseCard from "./CourseCard.jsx";

function PurchasedCourses() {
    const [purchasedCourses, setPurchasedCourses] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/users/purchasedCourses',{
            headers:{
                "Authorization" : "Bearer "+ localStorage.getItem("token")
            }
        }).then((res)=>{
            setPurchasedCourses(res.data);
        })
    },[]);
    return(
        <div style={{display: "flex", flexWrap:"wrap"}}>
            <Navbar></Navbar>
            {purchasedCourses.map((course)=>{
                return <Grid item lg={3}><CourseCard course={course} buttonText="Content"></CourseCard></Grid>
            })}
        </div>
    )
}
export default PurchasedCourses;