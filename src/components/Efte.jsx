import React from 'react';
import efteImage from '../assets/efte.jpg'; // Import the image

const Efte = () => {
  return (
    <div className='bg-gray-200'>
      <div className="flex w-[100vw] h-[100vh]  sm:flex-col">

      <div className='flex lg:flex-row md:flex-row gap-4 m-auto sm:flex-col '>
     <div className='flex w-[50%]' > <img className=' h-40 w-40 rounded left-10' src={efteImage} alt="Efte" />
     
     </div>
        <div className='flex  flex-col w-[50%] '>
        <h3>Eftekher Ali Efte</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis a eligendi dolorem blanditiis voluptates aliquid in exercitationem unde fuga rem. Esse quis expedita porro officiis in explicabo id nesciunt omnis, sapiente magnam, vero ipsam!</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Efte;
