import React from 'react';

function Section3() {
  return (
    
    <div  className="content3 p-20 w-screen h-full text-center justify-center">
      <p className="font-bold">Cases</p>
      <h1 className="text-[150px] leading-[140px] font-sans font-bold m-8">
        Head Turning <br /> Projects
      </h1>
      <div className="btnt flex text-center justify-end">
        <button className="px-8 py-3 rounded-2xl border-2 border-black ">Alle projecten <i className="ri-arrow-right-line"></i></button>
      </div>

      <div className="group bigimg w-full h-[100vh] pt-20 relative">
        <img className='w-full h-full   rounded-3xl group-hover:rounded-[150px]  hover:scale-105 transition-all ease-in duration-300' src="src/assets/bigimg1.jpg" alt="" />
        <img className='w-[350px] absolute left-1/2 opacity-0 rounded-3xl group-hover:opacity-100 transition-all ease-in duration-300 top-1/2 -translate-x-1/2 -translate-y-1/2' src="src/assets/birdimg.jpg" alt="" />
      </div>
 
    </div>
    
  );
}

export default Section3;
