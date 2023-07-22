import {Button, Card, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "./navbar.jsx";

function Signin(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return (

        <div>
            <Navbar></Navbar>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"}>
                    Welcome back. Sign in below
                </Typography>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Card varint={"outlined"} style={{width: 400, padding: 20}}>
                    <TextField
                        fullWidth={true}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        onChange={(e)=>{
                            setUsername(e.target.value);
                        }}
                    />
                    <br/><br/>
                    <TextField
                        fullWidth={true}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type={"password"}
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                    />
                    <br/><br/>

                    <Button
                        size={"large"}
                        variant="contained"
                        onClick = {()=>{
                            fetch('http://localhost:3000/admin/login',{
                                method: "POST",
                                headers: {
                                    "Content-type": "application/json",
                                    "username" : username,
                                    "password" : password
                                }
                            })
                                .then(res => res.json())
                                .then((data)=>{
                                    localStorage.setItem("token",data.token);
                                    navigate("/admin/courses");
                                })
                        }}
                    > Signin</Button>
                </Card>
            </div>
        </div>
    )
}
export default Signin;