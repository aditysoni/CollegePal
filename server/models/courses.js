// import mongoose from "mongoose";
const mongoose = require('mongoose')  ;


const CoursesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: 
    {
        type : String 
    }, 
    department : 
    {
        type : String 
    }
})

const Courses = mongoose.model('Courses', CoursesSchema);

module.exports = Courses ;