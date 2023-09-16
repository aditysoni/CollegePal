
// import mongoose from "mongoose";
const mongoose = require('mongoose')  ;


const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true , 
        
    },
    mentor :
    {
      type : String 
    } , 
    studentId : 
    {
        type : String 
    }, 
    des: 
    {
        type : String 
    },
    team :
    {
       type : Number  
    } , 
    link : 
    {
      type : String 
    }
})

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project ;