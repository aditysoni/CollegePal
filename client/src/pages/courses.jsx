
import axios from 'axios' ;
import './courses.css' ;
import {React , useState , useEffect} from 'react'

const Courses = () => 
{
     
    const [input, setInput] = useState('');
    const [courses, setcourses] = useState([]);
    const [error, setError] = useState(null);
  
    async function searching(e) 
    {
      try {
        setInput(e.target.value);
        const response = await axios.get('http://localhost:5000/courses');
        const results = response.data.filter((student) =>
          student.name.toLowerCase().includes(input.toLowerCase())
        );
        setcourses(results);
      } catch (err) {
        console.log(err);
      }
    }

    async function fetchData() 
    {
      try 
      {
        console.log("hello") ;
        const response = await axios.get('http://localhost:5000/courses');
        // setcourses(response.data);
        console.log(response) ;
        setcourses(response.data) ;
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
  

  return (
    <div>
        <div> 
        
        </div>


        <div> 
        <div className="home-info"> 
          {courses.map(course=> 
            {
            <div className="card">
            <div className="content">
            <p className="heading">Engineering physcial metallurgy</p>
            <p className="para">
              Deapartment : Mechanical
            </p>
            <p>Code : EPM </p>
            <p> Rating : 4 </p>
           <button className="btn">Read more</button>
           </div>
           </div>  
          })}
        </div>
    </div>
    </div>
  )
  }   

export default Courses ;







