import React from 'react'

const NotFound = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center mx-auto min-w-full h-[100vh]'>
        <div className='flex flex-col md:flex-col sm:flex-col gap-5'>
           
           <img className='h-500 w-500 rounded  flex animate-ping shadow-lg'   src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712448000&semt=ais" alt="" /> 
           </div>
          
            <h3 className='text-white px-30 py-30 bg-blue-700 text-center text-4xl '>404</h3>

            <h3 className='font-mono px-10 py-10 rounded-xl  text-center text-5xl bg-blue-500 text-white'>Not found here</h3>
           

        
      
      </div>
    </div>
  )
}

export default NotFound
