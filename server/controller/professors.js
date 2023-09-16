const json = require("body-parser") ;
const  Professor = require( "../models/professor") ;
const Rating  = require("../models/rating");
const mongoose = require('mongoose') ;
const Comment = require ('../models/comments') ;

const addProfessor = async (req,res) =>  
//studentsId ,  name , department , rating 
{  
  console.log("adding the professor ") ;
  console.log(req.body)
   try 
   {  const studentId = req.body.studentId ;
      const newProf = new Professor ({
        name : req.body.name , 
        department:req.body.department, 
        rating : req.body.points , 
        raters:1 ,
        totalpoints : req.body.points 
      }) ;
      const newOne = await newProf.save() ;
      console.log(newOne) ;
    
      const newRate = new Rating ({
        studentId : studentId , 
        professorId : newOne._id ,
        points : req.body.points ,
        
      }) ;
      await newRate.save() ;
      console.log(newRate) ;
      res.status(200).json(newProf) ;
   } 
   catch(err)
   {
    res.status(400).json("error") ;
   }
}

const rateProfessor = async (req, res) =>   // points , studentId , professorId
{
    try {
        console.log("came here") ;
        const professorId = req.body.professorId ;
       const studentId = req.body.studentId ;
       const prof = await Professor.findById(professorId) ; 
       const ratingSch = await Rating.findOne({professorId , studentId}) ;
      
       if(ratingSch)
       {
         prof.totalpoints = prof.totalpoints - ratingSch.points + req.body.points;
         prof.rating = prof.totalpoints / prof.raters ;
         ratingSch.points = req.body.points  ; 
       }

       else 
       {
        const newRate = new Rating ({
            studentId : studentId , 
            professorId : professorId ,
            points : req.body.points ,
            
          }) ;
          await newRate.save();
       }
       const rating = (req.body.points + prof.totalpoints) / ( prof.raters + 1 ) ;

    }
    catch(err)
    {
        console.log(err) ;
    }
}

const commentProfessor = async(req, res) => 
{
    
  try { 
    console.log(req.body) ;
    console.log("came here") ;
    const professorId = req.body.professorId ;
   const studentId = 7579458785 ;
   const prof = await Professor.findById(professorId) ; 
   const commentSch = await Comment.findOne({professorId , studentId}) ;
   console.log(commentSch) ;
   if(commentSch)
   {
      commentSch.des = " " ;
      commentSch.des = req.body.comment ;
      console.log("saved again") ;
   }

   else 
   {
    const newComment = new Comment ({
        studentId : studentId , 
        professorId : professorId ,
        des : req.body.comment ,
      }) ;
      await newComment.save();
      console.log("saved ur review") ;
   }


}
catch(err)
{
    console.log(err) ;
}
}

const viewProfessor = async (req, res) => 
{
   try {
            const professors = await Professor.find() ;
            res.json(professors) ;
   }
   catch(err)
   {
    console.log(err) ;
    res.status(400).json("error") ;
   }
}

const getcomment  = async (req, res) => 
{ 
  
  try 
  { console.log("comment dekh lo guyz") ;
    const professorId = req.body._id;
     console.log(req.body._id) ;
     const comment = await Comment.find({professorId}) ;
     console.log(comment) ;
     res.json(comment) ;
  }
  catch (err)
  {
    console.log(err) ;
    res.status(404).json(err) ;
  }
}

module.exports = {addProfessor , rateProfessor, viewProfessor , commentProfessor , getcomment} ;