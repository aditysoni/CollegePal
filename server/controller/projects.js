const Project = require("../models/projects") ;

const Student = require('../models/student') ;
const getProjects = async (req, res) => 
{
    try 
    {
        const projects = await Project.find() ;
        res.status(200).json(projects) ;
    }
    catch(err)
    {
        console.log(err) ;
    }
}

const addProjects = async (req, res) => 
{
   try 
   {
      const newPro = new Project(req.body) ; 
      await newPro.save() ; 
    }
   catch(err)
   {
    console.log(err) ;
   }
}

const removeProjects = async (req, res) => 
{ 
   console.log("came here to remove ") ;
   try
   {
     const student = await Student.findById(req.body.studentId) ; 
     const project = await Project.findById(req.body.projectId) ;
     if(project)
     {
        const res = await Project.findOneAndDelete({name : req.body.name }) ;
        console.log(res) ;
        console.log("removed") ;
     }
     else 
     {  
        res.json(NOTFOUND) ;
     }
   }
   catch(err)
   {
    console.log(err) ;
   }
}


module.exports = {
   getProjects ,addProjects, removeProjects 
} ;