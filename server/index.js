
const express = require('express') ; 
const morgan = require('morgan') ;
const userRouter = express.Router() ;
const cors = require("cors") ; 
const cookieParser = require('cookie-parser') ; 
const app = express();
const mongoose = require('mongoose') ;
const morganBody = require('morgan-body') ;

const professorsController = require('./controller/professors');
const viewProfessorsFunction = professorsController.viewProfessor;
const addProfessor = professorsController.addProfessor ;
const rateProfessor = professorsController.rateProfessor ;
const commentProfessor = professorsController.commentProfessor ;
const getcomment = professorsController.getcomment ;

const projectController = require('./controller/projects') ;
const getProjects = projectController.getProjects ;
const addProjects = projectController.addProjects;
const removeProjects = projectController.removeProjects ;

const Register = require('../server/controller/auth/register') ;
const Login = require('./controller/auth/login');


app.use(express.json()) ;
app.use(cookieParser()) ;


// const rateProfessor = require('../server/controller/professors') ;


// Use a predefined format for Morgan, for example, 'combined'
app.use(morgan('combined'));
morganBody(app) ;
// app.use(cors()) ;

app.use("*" , cors({
    origin:true , 
    credentials:true ,
  })) ;


const database_link = 'mongodb+srv://admin:adityasoni1017@cluster0.4mitqeh.mongodb.net/?retryWrites=true&w=majority' ;
  const connection = async ()  =>
  {await mongoose.connect(database_link)
    .then(function(db){
      console.log("db connected") ;
  })
  .catch(function(err){
      console.log("not connected") ;
  });}
  
  connection() ;  

 






app.listen(5000 , ()=> console.log('running fast ')) ;
app.post('/rateprofessor' , rateProfessor) ;
app.post('/register' , Register) ;
app.post('/login' , Login) ;


app.post('/addprofessors' , addProfessor) ;
app.get('/professors' , viewProfessorsFunction) ;
app.post("/commentprofessor", commentProfessor ) ;
app.post("/cprof" , getcomment ) ;

app.post('/addproject' , addProjects) ;
app.get('/getprojects' , getProjects ) ;
app.delete('/removeprojects' , removeProjects) ;
