

import axios from 'axios' ;
import './courses.css' ;
import {Link, NavLink, useNavigate} from 'react-router-dom' ;
import {React , useState , useEffect} from 'react'
import Professordetail from './professordetail';
import Navbar from '../components/navbar';


const Professors = () => 
{
  const navigate = useNavigate() ;
    const [input, setInput] = useState('');
    const [profs, setprof] = useState([]);

    const [name , setName ] = useState("") ;
    const [department , setdepartment ] = useState("") ;
    const [points ,setpoints ] = useState('') ;

    const updataName =(e)=>
    {
        setName (e.target.value) ;
    }

    const updatedepartment =(e)=>
    {
        setdepartment(e.target.value) ;
    }

    const updatepoints =(e)=>
    {
        setpoints(e.target.value) ;
    }
    
    const [error, setError] = useState(null);
  
    async function searching(e) 
    {
      try {
        setInput(e.target.value);
        const response = await axios.get('http://localhost:5000/professors');
        const results = response.data.filter((student) =>
          student.name.toLowerCase().includes(input.toLowerCase())
        );
        setprof(results);
      } catch (err) {
        console.log(err);
      }
    }
   
    async function fetchData() 
    {
      try 
      {
        console.log("hello") ;
        const response = await axios.get('http://localhost:5000/professors');
        // setprof(response.data);
        console.log(response.data) ;
        setprof(response.data) ;
      } 
       catch (error) 
       {
        console.log(error);
        setError("Sorry");
      }
    }
    useEffect(() => {
      fetchData(); // Uncomment this line to fetch data when the component mounts.
    }, []);

 
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => 
         {
         setShowForm(!showForm);
      };

     
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const studentId = 454;
        try 
        {
         const data = {name , department , points , studentId } ;
         console.log(data) ;
         const res = await axios.post('http://localhost:5000/addprofessors' , data ) ; 
         console.log(res) ;
        }
        catch(err)
        {
         console.log("please try again") ;
        }

        toggleForm(); // Close the form after submission
      };

      const shift = (profe) => 
      { 
        console.log(profe) ;
        console.log("data sent ") ;
        navigate(`/professors/getdetail` , { state: profe});
      }
  

  return (
    <div>
        <Navbar/>
        <div> 
         <div className="relative">
        
         <div className='searchBar'>
         <div class="mb-3">
         <input
           type="search"
           class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
           id="exampleSearch"
           placeholder="Type query"
           onChange={searching} />
       </div>
       
       </div>
       <button
       className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
       onClick={toggleForm}
     >
       Add Professors
     </button>
         {showForm && (
           <div className="fixed inset-0 flex items-center justify-center z-50">
             <div className="bg-indigo-200 w-96 p-6 rounded-lg shadow-lg">
               <h2 className="text-2xl font-semibold mb-4">Add Professor</h2>
               <form onSubmit={handleSubmit}>
                 <div className="mb-4">
                   <label className="block text-gray-600">Name</label>
                   <input
                     type="text"
                     name="name"
                     placeholder='Name'
                     onChange = {updataName}
                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                   />
                 </div>
                 <div className="mb-4">
                   <label className="block text-gray-600">Email</label>
                   <input
                     type="text"
                     placeholder='department'
                     name="department"
                     onChange={updatedepartment} 
                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                   />
                 </div>  
                
                 <div className="mb-4">
                 <label className="block text-gray-600">Rating</label>
                 <input
                   type="Number"
                   placeholder='0-5'
                   onChange={updatepoints}
                //    name="0-5"
                 
                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                 />
               </div> <div className="mb-4">
               <label className="block text-gray-600">Professor Short Name </label>
               <input
                 type="text"
                 placeholder='code'
              //    name="0-5"
               
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
               />
             </div>
                 <div className="text-right">
                   <button
                     type="submit"
                     onClick={handleSubmit}
                     className="bg-blue-500 hover:bg-blue-600 mt-10 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300 "
                   >
                     Submit
                   </button>
                 </div>
               </form>
             </div>
           </div>
         )}
       </div>



        <div className="cards-info-top"> 
        { 
            profs.map((prof) => (
               
            <div className="card">
              <div className="content">
                <p className="heading">{prof.name}</p>
                <p className="para">Department:{prof.department}</p>
                <p className ="para"> Rating: {prof.rating}</p>
                <p className ="para"> Total Reviews : {prof.raters}</p>
                <button className="btn" onClick={() => shift(prof)}>More Info</button>
            
              </div>
              
            </div>
            
           
          
          ))}
        </div>

    </div>
    
    </div>
  )
  }   

export default Professors ;


























