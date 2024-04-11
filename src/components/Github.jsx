import React, { useEffect, useState } from 'react'
import Cardtwo from './Cardtwo';


const Github = () => {
const [data,setData]=useState([]);

    const userInfo =async()=>{
        const data= await fetch(`https://api.github.com/users/EFTEKHER`).then(res=>{
            if(!res.ok){
                throw new Error('Network response was not ok')
            }

            return res.json();
        }).then(data=>{
           setData(data);
           console.log(data);
        }) .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });

    }
    useEffect(()=>{
        userInfo();
    },[])
    
  return (
    <Cardtwo name={data.name}  follower={data.followers} image={data.avatar_url}/>
    
  )
}

export default Github
