import express from 'express'
import mongoose from 'mongoose';
import adminRouter from "./Routes/admin.js";
import userRouter from "./Routes/user.js";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/admin", adminRouter);
app.use("/users", userRouter);

mongoose.connect(process.env.URI,{useNewUrlParser: true, useUnifiedTopology: true, dbName: "Courses" })

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
