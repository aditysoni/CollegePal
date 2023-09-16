import axios from 'axios' ;
import { loginuse , tokenauth } from '../redux/slices/users';
import { useDispatch, useSelector } from 'react-redux';
const { useState , useEffect } = require("react") ;

// import './courses.css' ;
const Project = () => 
{ 
  const dispatch = useDispatch() ;
  const [input, setInput] = useState('');
  const [projects , setProjects] = useState([]) ;
  const [name , setname ] = useState(" ") ; 
  const [topic , settopic] = useState("") ;
  const [mentor, setmentor] = useState(" ") ;
  const [studentId, setstudentId] = useState('') ;
  const [team , setteam] = useState("") ;
  const [des , setdes] = useState(" ") ;
  const [link , setLink] = useState('') ;
  const {data} =useSelector(state =>state.isloggedin) ;

  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => 
       {
       setShowForm(!showForm);
    };
    
    const updateName = (e) => 
    {
      setname(e.target.value) ;
      dispatch(loginuse(name)) ; 
    }

    const updatetopic = (e) => 
    {
      settopic(e.target.value) ;
    }

    const updatementor = (e) => 
    {
      setmentor(e.target.value) ;
    }
    
    const updatestudentId = (e) => 
    {
      setstudentId(e.target.value) ;
    }
    const updateteam = (e) => 
    {
      setteam(e.target.value) ;
    }
   
    const updatelink = (e) => 
    {
      setLink(e.target.value) ;
    }

    const updatedes = (e) =>
    {
        setdes(e.target.value) ;
    }

    async function fetchData() 
    { 
      
      try 
      { 
        console.log("hello") ;
        const response = await axios.get('http://localhost:5000/getprojects');
        // setprof(response.data);
        console.log(response) ;
        setProjects(response.data) ;
        console.log(projects) ;
        dispatch(tokenauth(response.token)) ;
        
      } 
       catch (error) 
       {
        console.log(error);
        // setError("Sorry");
      }
    }
    useEffect(() => {
      fetchData(); 
      // Uncomment this line to fetch data when the component mounts.
    }, []);
   

 
   const handle= async ()=>
   {
    const data = { name , mentor , topic , team , des , link} ;
    const res = await axios.post('http://localhost:5000/addproject' , data) ;
    console.log(data) ;
    toggleForm() ;
   }

  async function searching(e) 
  {
    try {

      setInput(e.target.value);
      const response = await axios.get('http://localhost:5000/getprojects');
      const results = response.data.filter((project) =>
        project.name.toLowerCase().includes(input.toLowerCase())
      );
      setProjects(results);
    } catch (err) {
      console.log(err);
    }
  }
  return (

<div> 
     <div> 
        {data}
        <h1 className="title ">
        Projects And Research Works 
        </h1>
     </div>

     <div className = "searchBar">
         <div className=''>
        <input
           type="search"
           className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
           id="exampleSearch"
           placeholder="Type query"
           onChange={searching} />
           </div>
       </div>
       <div> 
       <div className="relative">
       <button
         className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
         onClick={toggleForm}
       >
         ADD WORK
       </button>
       {showForm && (
         <div className="fixed inset-0 flex items-center justify-center z-50">
           <div className="bg-indigo-200 w-96 p-6 rounded-lg shadow-lg">
             <h2 className="text-2xl font-semibold mb-4">Add Professor</h2>
             
               <div className="mb-4">
                 <label className="block text-gray-600">Name</label>
                 <input
                   type="text"
                   name="name"
                   placeholder='Name of the Project'
                   onChange = {updateName}
                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                 />
               </div>
               <div className="mb-4">
                 <label className="block text-gray-600">Related to the feild</label>
                 <input
                   type="text"
                   placeholder='Blockchain Web3 '
                   name="department"
                 onChange={updatetopic}
                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                 />
               </div>  
              
               <div className="mb-4">
               <label className="block text-gray-600">Mentor</label>
               <input
                 type="text"
                 placeholder='Professor / Mentor Name'
                 onChange={updatementor}
              //    name="0-5"
               
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
               />
             </div> 

             <div className="mb-4">
             <label className="block text-gray-600">Team Size</label>
             <input
               type="Number"
               placeholder=' 5 '
               onChange={updateteam}
            //    name="0-5"
             
               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-30"
             />
          
           </div> 
           <div className="mb-4">
           <label className="block text-gray-600">Link</label>
           <input
             type="link"
             placeholder="Research work or project link"
             onChange={updatelink}
             // name="0-5"
             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-"
             // Replace 'h-12' with the desired height class
           />
         </div>
         <div > 
            <input className='des-box' type= "text" placeholder="tech stack used and the use of the project" 
            onChange={updatedes}
            />
         </div>
         <div className='buttons-projects-toggle'>
         <div className="text-right">
                 <button
                   type="button"
                   onClick={toggleForm}
                   className="bg-blue-500 hover:bg-blue-600 mt-10 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                 >
                   Cancel
                 </button>
               </div>
               <div className="text-right">
                 <button
                   type="submit"
                   onClick={handle}
                   className="bg-blue-500 m:10px hover:bg-blue-600 mt-10 ml-5 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                 >
                   Submit
                 </button>
               </div>
               </div>
          
           </div>
         </div>
       )}
     </div>
     <div> 
     <div className ="cards-info-top">
     {projects.map(project => (
       <div className="card" key={project.id}>
         <div className="content">
           <p className="heading">{project.name}</p>
    
         </div>
       </div>
     ))}
   </div>
     </div>
   </div>
   </div>
  )
}

export default Project ;






























   

 
    
   

  




       
     
























