import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    if (localStorage.getItem("token")){
        return <div style={{width: "100vw", height: "70px", display:"flex", justifyContent: "space-around", position:"sticky", top: "0px"}}>
            <div>
                <Typography variant="h5" sx={{color:"blue"}}>Course App</Typography>
            </div>
            <div style={{paddingRight:"50px"}} >
                <Button variant="text" onClick={()=>{
                    navigate("/users/courses");
                }}>All Courses</Button>
                <Button variant="text" onClick={()=>{
                    navigate("/users/purchasedCourses");
                }}>My Courses</Button>
                <Button variant="text" onClick={()=>{
                    localStorage.removeItem("token");
                    navigate("/users/signin");
                }}>LOGOUT</Button>
            </div>
        </div>
    } else{
        return(
            <div style={{width: "100vw", height: "70px", display:"flex", justifyContent: "space-around"}}>
                <div>
                    <Typography variant="h5" sx={{color:"blue"}}>Course App</Typography>
                </div>
                <div>
                    <Button variant="text" onClick={()=>{
                        navigate("/users/signin");
                    }}>LOGIN</Button>
                    <Button variant="text" onClick={()=>{
                        navigate("/users/signup");
                    }}>SIGNUP</Button>
                </div>
            </div>
        )
    }
}
export default Navbar;