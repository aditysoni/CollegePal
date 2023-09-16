// import mongoose from "mongoose";
const mongoose = require('mongoose')  ;


const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNo : {
        type : String , 
        required:true , 
        unique : true 
    } , 
    email: 
    { 
        type: String,
        required:true , 
        unique : true , 
    }
    
})

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student ;