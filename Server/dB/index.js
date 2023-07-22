import mongoose from 'mongoose';
const adminSchema = mongoose.Schema({
    username : String,
    password : String
});

const userSchema = mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [{type: mongoose.Types.ObjectId, ref:'Course'}]
});

const courseSchema = mongoose.Schema({
    title : String,
    description : String,
    price : Number,
    imageLink : String,
    published : Boolean
})

export const User = mongoose.model('User',userSchema);
export const Admin = mongoose.model('Admin', adminSchema);
export const Course = mongoose.model('Course', courseSchema);