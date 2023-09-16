// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// // import Cookies from ''
// const Professordetail = (prof) => 

//  {  
//     const {state} = useLocation() ;  //destructing of the data which is sent from the professor component
//    const profs = state ;
   
//     const [point, setpoint] = useState('') ;
//     // const [studentId ,setstudentId] =useState('') ;
//     // const professorId = prof._id ;

//     const [comment , setcomment] = useState([]) ;
//     const updatepoint = (e) => 
//     {
//         setpoint(e.target.value) ;
//     }
//     const updatecomment = (e)=>
//     {
//        setcomment(e.target.value) ;
//     }

//    useEffect(()=>{
//     console.log(prof) ;
//    })
   
//         const fetchtoken = async () => {
      
      
       
//             const data = profs._id ;
//             console.log("hello " , profs) ;
//             const res = await axios.post("http://localhost:5000/cprof", profs) ;
//             setcomment(res.data.data) ;
//             console.log("hello" , comment) ;
//         }
          
        
//     const Rate = async () => 
//     {
//         try 
//         { 
//         //   useSelector()
//           const studentId = 444;
//           const professorId = profs._id ;
//           const data = {professorId , studentId , point} ;
//           console.log(data) ;
//           const res = await axios.post('http://localhost:5000/rateprofessor' , data) ;
//         }catch(err)
//         {
//             console.log(err) ;
//         }
//     }

//     const Comment = async () => 
//      {  
//         try 
//         {   const studentId = 444;
//             const professorId = '64ff16c5c14dd7dd6dcb4534' ;
//            const data = { professorId , studentId , comment} ;
//            const res = await axios.post('http://localhost:5000/commentprofessor ' , data ) ;
//         }
//         catch(err)
//         {
//             console.log(err) ;  
//         }
//     }

//     useEffect(()=> 
//     {
//         fetchtoken() ;
    
//     } , [])
//   return (
//     <div className = 'main-detail'>
//       <div className='wrapper-main'> 
//         <div className = "wrapper">
//            <div className = "title"> 
//             {profs.name}
//            </div>
//            <div className = "detail-para">
//               <p>Department: {profs.department}</p>
//               <p>Rating : {profs.rating} </p>
//               <p>Total Reviewers : {profs.raters}</p>
              
//               <input
//                 type="Number"
//                 name="point"
//                 placeholder='0-10'
//                 onChange = {updatepoint}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//               />
//                    <div className="writeFormGroup">
//                 <input
//                      placeholder="Tell your story..."
//                      type="text"
//                      className="writeInput"
//                      onChange={updatecomment}
//                  >
//                 </input>
//            </div>
//            <button className = "profdetailbutton" onClick={Rate}>rate the prof</button>
//            <button  className = "profdetailbutton" onClick = {Comment}>comment karo</button>
//          </div>
        
//          <div className="cards-info-top"> 
//          { 
//              comment.map((comt) => (  
//              <div className="card">
//                <div className="content">
//                  <p className="para">{comt.des}</p>
//                </div>
//              </div>
//            ))}
//          </div>
//         </div> 
//         </div>
//     </div>
//   )
// }
 

// export default Professordetail ;


import img from '../prof.png' ;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Professordetail = () => {
  const { state } = useLocation();
  const profs = state;
  
  const [listcomment , setlistcomment ]  = useState([]) ;
  const [point, setPoint] = useState('');
  const [comment, setComment] = useState(''); // Initialize as an empty array

  const updatePoint = (e) => {
    setPoint(e.target.value);
  };

  const updateComment = (e) => {
    setComment(e.target.value);
  };

  const fetchToken = async () => {
    try {
      const res = await axios.post("http://localhost:5000/cprof", profs);
      setlistcomment(res.data);
      console.log(listcomment);
    } catch (err) {
      console.log(err);
    }
  };

  const rateProfessor = async () => {
    try {
      const studentId = 444;
      const professorId = profs._id;
      const data = { professorId, studentId, point };
      const res = await axios.post('http://localhost:5000/rateprofessor', data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const commentProfessor = async () => {
    try {
      const studentId = 444;
      const professorId = '64ff16c5c14dd7dd6dcb4534';
      const data = { professorId, studentId, comment };
      const res = await axios.post('http://localhost:5000/commentprofessor', data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <div className='main-detail'>
        <div className ="profdetail-main">
        <div className ="profdetail-left">
         <img className = "imagevala" src= {img}/>
            </div>
          <div className='profdetail-right'>
            <div className="title">
            {profs.name}
            </div>
             <div className="detail-para">
            <p>Department: {profs.department}</p>
            <p>Rating : {profs.rating} </p>
            <p>Total Reviewers : {profs.raters}</p>

             <input
              type="Number"
              name="point"
              placeholder='0-10'
              onChange={updatePoint}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              <div className="writeFormGroup">
              <input
                placeholder="Tell your story..."
                type="text"
                className="writeInput"
                onChange={updateComment}
               />
              </div>
                <button className="profdetailbutton" onClick={rateProfessor}>rate the prof</button>
                <button className="profdetailbutton" onClick={commentProfessor}>comment karo</button>
              </div>
            </div>
          </div>
          <div className="comment-top">
            { 
                listcomment.map((commen) => (
              <div className="comment-topic" key={commen._id}>
                <div className="comment-">
                  <p className="para">{commen.des}</p>
                
                </div>
                
                <hr/>
              </div>
            ))}
          </div>
          </div>

         
   
   
  );
}

export default Professordetail;
