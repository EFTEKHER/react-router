import React, { useEffect, useState } from 'react'


const Github = () => {
    const [name,setName]=useState('');
    const [follower,setFollower] = useState(null);
    const [url,setUrl]=useState('');

    const userInfo =async()=>{
        const data= await fetch(`https://api.github.com/users/EFTEKHER`).then(res=>{
            if(!res.ok){
                throw new Error('Network response was not ok')
            }

            return res.json();
        }).then(data=>{
            setName(data.name);
            setFollower(data.followers)
            setUrl(data.avatar_url)
        }) .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });

    }
    useEffect(()=>{
        userInfo();
    },[])
  return (
    <div className='flex w-full h-[100vh] overflow-hidden '>
       <div className='container flex flex-col lg:w-[600px] lg:h-[500px] md:w-[600px] md:h-[500px] sm:w-full sm:h-[90vh] justify-center rounded    gap-4  items-center m-auto bg-violet-200  transition-all duration-500  shadow-2xl transform lg:hover:w-[650px] lg:hover:h-[550px] md:hover:w-[650px] md:hover:h-[550px]  overflow-hidden '>
       <h3 className='text-center text-2xl font-bold text-black font-serif' >GitHub</h3>
       <img className='lg:h-20 lg:w-20 md:h-20 md:w-20 sm:h-5 sm:w-5 rounded-full box-border' src={url} alt="" />
        <h3 className=' text-black font-serif' >Name:{name}</h3>
        <h3 className=' left-3 text-black font-serif'>Follower:{follower}</h3>
       </div>
    </div>
  )
}

export default Github
