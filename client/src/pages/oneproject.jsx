import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Oneproject = () => 
{  
        
    const id = useParams() ;
    const fetchtoken = async () => 
    {
        // const res = await axios.get(`http://localhost:3000/professor/:id` ) ;
        

    }
    useEffect(()=> 
    {
      fetchtoken() ;
    } , )
    return (
         <div className ="main-oneproject">
            <div className = "wrapper-main">  
                <div className="title"> 
                    Smart Contract Auditing 
                </div>
               <div> 
                <p className = " para "> Mentor : Mentors.Name  </p>
                <p className = " para "> Team Size : 5  </p>
                <p className = " para "> Department : Mechanical   </p>
                <p className = " para "> Description : Tech Stack which are used right now are  </p>
                <p className = " para "> Link : www.hjhdfkjsd.com  </p>
               </div>
               
            </div>
            </div>
           )
}
export default Oneproject ;