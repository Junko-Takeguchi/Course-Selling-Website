import express from 'express'
import mongoose from 'mongoose';
import adminRouter from "./Routes/admin.js";
import userRouter from "./Routes/user.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/admin", adminRouter);
app.use("/users", userRouter);

// mongoose.connect('mongodb+srv://kirattechnologies:iRbi4XRDdM7JMMkl@cluster0.e95bnsi.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

mongoose.connect('mongodb+srv://akshit:Akki-123@cluster0.jmjzcjf.mongodb.net/Courses',{useNewUrlParser: true, useUnifiedTopology: true, dbName: "Courses" })

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
