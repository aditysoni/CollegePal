const bcrypt = require('bcrypt') ;

const Login = async (req, res) =>
{    
  console.log("hey there") ;
  try{ 

   let data = req.body;
   let user = await student.findOne({ rollNo: data.rollNo}) ;
   console.log(user) ;
   if (user)
   {   // comparing the password 
    const isMatch = await bcrypt.compare(req.body.password, hashedPassword);
       
       if(isMatch)
       {
       console.log("heloo") ;
       let uid = user['_id'] ;
       let token = jwt.sign({payload:uid},"helliio") ; 
      console.log(token) ;
      res.cookie('Authorization' , token, ) ;  //sending the cookie 
       res.json({LoggedIn}) ;   // sending the user without password 
       }
       else{ 
        console.log("error") ;
        res.json(user) ;
      }
   }
  else
  {
    console.log("noone of this name is there") ;
    res.json(user);
  }
}
   catch(err){
      return res.json({
           messege:'fucked'
       });
   }
}

module.exports = Login ;
