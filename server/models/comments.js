// import mongoose from "mongoose";
const mongoose = require('mongoose')  ;
const commentSchema  = new mongoose.Schema({
    studentId : 
    {
       type : String 
    } , 

    professorId : 
    {
        type :String 
    } , 
    coursesId : {
        type : String, 
        default : null
    }, 
    des:
    {
        type :String  , 
    }
  
}) ;

const Comment = mongoose.model('Comment', commentSchema );

module.exports = Comment ;