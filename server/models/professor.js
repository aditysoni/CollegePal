// import mongoose from "mongoose";
const mongoose = require('mongoose')  ;


const ProfessorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department : 
    {
        type :String 
    },
    rating : 
    {
        type : Number
    },
    raters:
    {
      type : Number 
    }, 
    totalpoints : 
    {
        type : Number 
    }

    
})

const Professor = mongoose.model('Professor', ProfessorSchema);

module.exports = Professor ;