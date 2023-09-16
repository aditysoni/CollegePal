
// import mongoose from "mongoose";
const mongoose = require('mongoose')  ;


const RatingSchema = new mongoose.Schema({
    
    studentId : 
    {
        type : String , 
        
    } , 
    professorId : 
    {
        type : String , 
    } , 
    courseId : 
    {
        type : String ,
    },
    points:  
    {
        type : Number , 
        min: 0 , 
        max : 5 
    } , 
  
})

const Rating  = mongoose.model('Rating ', RatingSchema);

module.exports = Rating  ;