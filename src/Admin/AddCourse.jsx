import {Button, TextField} from "@mui/material";
import Navbar from "./navbar.jsx";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function AddCourse(){
    const [title, setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();
    return(
        <div style={{display:"flex", justifyContent: "center"}}>
            <Navbar></Navbar>
            <div style={{display:"flex", justifyContent: "center", flexDirection: "column",margin:"10vw",width:"50vw"}}>
                <div>
                    <TextField
                        fullWidth={true}
                        value={title}
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        onChange={(e)=>{
                            setTitle(e.target.value);
                        }}
                    />
                </div>
                <br/>
                <div>
                    <TextField
                        fullWidth={true}
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        value={description}
                        onChange={(e)=>{
                            setDescription(e.target.value);
                        }}
                    />
                </div>
                <br/>
                <div>
                    <TextField
                        fullWidth={true}
                        id="outlined-basic"
                        label="Image-link"
                        variant="outlined"
                        value={imageLink}
                        onChange={(e)=>{
                            setImageLink(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <TextField
                        fullWidth={true}
                        type="number"
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        value={price}
                        onChange={(e)=>{
                            setPrice(e.target.value);
                        }}
                    />
                </div>
                <br/>
                <Button size={"large"}
                        variant="contained"
                        onClick={async ()=>{
                            await axios.post("http://localhost:3000/admin/courses",{
                                title: title,
                                description: description,
                                price: price,
                                imageLink: imageLink,
                                published: true
                            },{
                                headers: {
                                    "Authorization": "Bearer "+localStorage.getItem("token"),
                                }
                            })
                            navigate("/admin/courses");
                        }}
                > Add Course</Button>
            </div>
        </div>)
}
export default AddCourse;