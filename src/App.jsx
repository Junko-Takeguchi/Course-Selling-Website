import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./Admin/signup.jsx";
import Signin from "./Admin/signin.jsx"
import AddCourse from "./Admin/AddCourse.jsx";
import Courses from "./Admin/Courses.jsx";
import Course from "./Admin/Course.jsx";
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from "./Users/Navbar.jsx";
import UserSignin from "./Users/userSignin.jsx";
import CoursesHomepage from "./Users/CoursesHomepage.jsx";
import UserSignup from "./Users/userSignup.jsx";
import BuyCourse from "./Users/BuyCourse.jsx";
import PurchasedCourses from "./Users/PurchasedCourses.jsx";



function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path={"admin/signup"} element={<Signup/>}></Route>
            <Route path={"admin/signin"} element={<Signin/>}></Route>
            <Route path={"admin/addcourse"} element={<AddCourse/>}></Route>
            <Route path={"admin/courses"} element={<Courses/>}></Route>
            <Route path={"admin/course/:courseId"} element={<Course/>}></Route>
            <Route path={"users/signin"} element={<UserSignin/>}></Route>
            <Route path={"users/signup"} element={<UserSignup/>}></Route>
            <Route path={"users/courses"} element={<CoursesHomepage/>}></Route>
            <Route path={"users/course/:courseId"} element={<BuyCourse/>}></Route>
            <Route path={"users/purchasedCourses"} element={<PurchasedCourses/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
