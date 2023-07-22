import {useNavigate} from "react-router-dom";
import {AppBar, Avatar, Button, Typography} from "@mui/material";

function Navbar() {
    const navigate = useNavigate();
    if (!localStorage.getItem("token")){
        return <>
            <AppBar position="fixed" color="inherit" elevation={1} sx={{zIndex:2, marginBottom:"70px"}}>
                <div style={{display: "flex", justifyContent:"space-between", margin:"15px"}}>
                    <div>
                        <Avatar alt="Harkirat Singh" src="https://d33g7sdvsfd029.cloudfront.net/subject/2023-01-17-0.3698267942851394.jpg"/>
                    </div>
                    <div>
                        <Button sx={{marginLeft:"10px"}} variant={"contained"} onClick={()=>{
                            navigate("/admin/signin");
                        }}>SIGN IN</Button>
                        <Button variant={"contained"} onClick={()=>{
                            navigate("/admin/signup");
                        }}>SIGN UP</Button>
                    </div>
                </div>
            </AppBar>
        </>
    } else {
        return <>
            <AppBar position="fixed" color="inherit" elevation={1} sx={{zIndex:2, marginBottom:"70px"}}>
                <div style={{display: "flex", justifyContent:"space-between", margin:"15px"}}>
                    <div>
                        <Avatar alt="Harkirat Singh" src="https://d33g7sdvsfd029.cloudfront.net/subject/2023-01-17-0.3698267942851394.jpg"/>
                    </div>
                    <div>
                        <Button sx={{marginLeft:"10px"}} variant={"contained"} onClick={()=>{
                            navigate("/admin/courses");
                        }}>All Courses</Button>
                        <Button variant={"contained"} onClick={()=>{
                            navigate("/admin/addcourse");
                        }}>Add Course</Button>
                        <Button variant={"contained"} onClick={()=>{
                            localStorage.removeItem("token");
                            navigate("/admin/signin");
                        }}>LOGOUT</Button>
                    </div>
                </div>
            </AppBar>
        </>
    }

}
export default Navbar;