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
                return <div>{course.title}</div>
            })}
        </div>
    )
}
export default PurchasedCourses;