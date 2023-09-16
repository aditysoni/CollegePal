
import { React , useState } from 'react';
import axios from 'axios';

const LoginForm = () => {



  

    const [rollNo , setrollNo] = useState("") ;
    const [password , setPassword] = useState("") ;
  

   

      const handlerollNoChange = (e) => {
        setrollNo(e.target.value);
      };
    
   
      
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
      
      const handleLoginForm = async () => 
      {
        try { 
           
            const data = { password , rollNo  };
            console.log(data) ;
            const savedUserResponse = await axios.post(
            "http://localhost:5000/login", data );
            console.log(savedUserResponse) ;
           
            alert(savedUserResponse) ;
            
        } 
        catch (error) {
            console.log("An error occurred:", error.message);
        }
    };
    
  return (
    <div>
   
    <div class="min-h-screen bg-purple-400 flex justify-center items-center">
        <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
        </div>
        
        <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
                <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
                <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an
                    account to enjoy all the services without any ads for free!</p>
            </div>
            <div class="space-y-4">
               
                <input type="text" placeholder="20ume003" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" onChange= {handlerollNoChange}/> 
                <input type="text" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" onChange= {handlePasswordChange} />
        </div>   
               
                <div class="text-center mt-6">
                    <button class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl hover:bg-purple-700" onClick ={handleLoginForm}>Create Account</button>
                    <p class="mt-4 text-sm">Already Have An Account? <span class="underline cursor-pointer"> Sign In</span>
                    </p>
                    
                </div>
            </div>
            <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
            <div
                class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
            </div>
        </div>
    </div>
  )
}

export default LoginForm
