import Navbar from "./Navbar.jsx";
import {Box, Button, Checkbox, Container, Link, TextField, Typography} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function UserSignin() {
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    return <Container component="main" maxWidth="90vw">
        <Navbar></Navbar>
        <Box
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={(e)=>{e.preventDefault()}} noValidate sx={{mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    value={username}
                    onChange={(e)=>{
                        setUserName(e.target.value);
                    }}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    onClick={()=>{
                        axios.post("http://localhost:3000/users/login",{},{
                            headers:{
                                "username" : username,
                                "password" : password
                            }
                        }).then((res)=>{
                            localStorage.setItem("token", res.data.token);
                            navigate("/users/courses");
                        })
                    }}
                >
                    Sign In
                </Button>
            </Box>
        </Box>
    </Container>
}
export default UserSignin;