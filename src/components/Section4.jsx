import React from 'react';

const Section4 = () => {
  return (
    <div className="h-[100%]   w-full py-10  flex space-x-36 ">
      {/* Left Section */}
      <div className="group w-full md:w-1/2 h-[100%] p-10 pl-32 mt-5 relative">
        <img
          className="w-[800px] h-[600px] object-cover rounded-3xl group-hover:rounded-[150px] hover:scale-105 transition-all ease-in duration-300"
          src="src/assets/shadowimg.jpg"
          alt="Big Image 1"
        />
        <img
          className="w-[250px] h-[250px] object-cover absolute left-1/2 opacity-0 rounded-3xl group-hover:opacity-100 transition-all ease-in duration-300 top-1/2 -translate-x-[30%] -translate-y-[100%]"
          src="src/assets/downtoearth.jpg"
          alt="Not found"
        />
            <div className=''>
      <h3 className='opacity-45 pt-5 text-black text-xm font-bold'>Gaaf Creaties</h3>
      <h2 className='text-xl font-medium '>Creating mood-boosting experiences</h2>
      <div className="btns flex space-x-4 mt-2  ">
        <button className=' font-bold px-2  text-xs rounded-2xl border-2 border-black'>BRAND STORY</button>
        <button className=' font-bold px-2 text-xs rounded-2xl border-2 border-black'>MERKIDENTIET</button>
        <button className=' font-bold px-2  text-xs rounded-2xl border-2 border-black'>MERKIDENTIET</button>
      </div>
    </div>
    <div className='pt-32'>
      <div className="box rounded-2xl flex justify-center px-9 py-9 items-center space-x-14 w-[600px] h-[90px] bg-white ">
        <h1>Ook aan de slag met jouw merk?</h1>
        <div className="btn">
            <button className='text-1xl px-14 py-4 rounded-2xl border-2 border-black'>Let's Meet<i className="ri-arrow-right-line"></i></button>
        </div>
        </div>
      </div>
        
  
      </div>

      {/* Right Section */}
      <div className="group  w-full md:w-1/2 h-[90vh] p-10 relative">
        <img
          className="w-[400px] h-[600px] object-cover mt-8 scale-110 rounded-3xl group-hover:rounded-[150px] hover:scale-125 transition-all ease-in duration-300"
          src="src/assets/jacket.jpg"
          alt="Big Image 2"
        />
        <img
          className="w-[250px] absolute left-1/2 opacity-0 rounded-3xl group-hover:opacity-100 transition-all ease-in duration-300 top-1/2  -translate-x-[80%] -translate-y-[40%]"
          src="src/assets/quote.jpg"
          alt=""
        />
                <div className=''>
      <h3 className='opacity-45 pt-10 text-black text-xm font-bold'>Don't Mind</h3>
      <h2 className='text-xl font-medium '>Campaigners for eventful brands</h2>
      <div className="btns flex space-x-4 mt-2  ">
        <button className=' font-bold px-2  text-xs rounded-2xl border-2 border-black'>BRAND STORY</button>
        <button className=' font-bold px-2 text-xs rounded-2xl border-2 border-black'>MERKIDENTIET</button>
        <button className=' font-bold px-2  text-xs rounded-2xl border-2 border-black'>MERKIDENTIET</button>
      </div>
    </div>
        
      </div>
    </div>
  );
};

export default Section4;
