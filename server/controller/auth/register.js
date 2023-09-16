const Student = require("../../models/student" );
const bcrypt = require('bcrypt') ;

const Register = async(req, res) =>
{
   try 
   {   const saltRounds = 10 ; 
       const password = req.body.password  ; 
       const salt = await bcrypt.genSalt(saltRounds);
       const hash = await bcrypt.hash(password, salt);
       console.log(req.body) ;
       const newStud = new Student ({
              name : req.body.name ,
              rollNo: req.body.rollNo ,
              email : req.body.email ,
              password : hash
        })
        await newStud.save() ;
        console.log("saved new user ") ; 
   }
   catch(err) 
   {
      console.log(err) ;
      res.status(400).json("error") ;
   }
}

module.exports = Register ;