import React, { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios';
import FinalBoard from "./FinalBoard";
 const Pindetails = (props,images) => {
    const [allData, setData] = useState();
    const [arr, setrr] = useState([]);
    const [post, setPost] = useState();
 
const {id}=useParams();
const {url}=useParams();
const urlss=window.location.pathname;

const urlz=urlss.replace('https://images.unsplash.com/', "");
const variable2=urlz.replace('/details', "");
const variable1="https://images.unsplash.com";
const tr=variable1+variable2;
//     useEffect(() => {
//  axios.get('https://api.unsplash.com/search/photos',{
//     headers:{
//         'Authorization': "Client-ID y-KsfJBqb_iZfZO12bN7fqEWsrAdGbQoJAUwN-soUns"
//     }.then(response => {
//       setPost(response.data);
//    })
      
// })
//     }, []);
           


        return (

         //props.images.map(image => {
         // props.images.filter(item => item.id === id ).map(function(image) {
         //    return (
            <div  className='detail-image'>
            
       	<img alt='' src={tr} ></img>



           <FinalBoard path={tr} ></FinalBoard>

          
              

            </div >

          
         //    );
         // })

          )
   
        

       
     
        

};
export default Pindetails;