import React from 'react'
import {useParams } from 'react-router-dom'
const User = () => {
    const {userid}=useParams();
  return (
   
    <div className='flex'>
      <p className='bg-gray-600 text-white h-20 w-full text-center m-auto text-2xl p-auto py-4'>user no :{userid} </p>
    </div>
  )
}

export default User
