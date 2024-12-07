import React from "react";

const Section1 = () => {
  return (
    <div className="w-screen">
      <div className="ptop p-20 flex ">
        <div className="left w-full  ">
          <h1 className=" text-[115px] leading-[110px] font-serif">
            Turning heads and conquering 
          </h1>
          <div className="hearts-logo flex items-center gap-7 mt-[-25px]">
            <h1 className="text-[115px] font-serif">hearts</h1>
            <div className="animate rotate-icon w-20  "><img src="src/assets/attherate.webp" alt="" /></div> 


          </div>
        </div>
       <div className="right  pl-52  flex items-center justify-between ">
      <div className="content  ">
      <div className="para w-full pl-52 ">
       <p className="text-[20px] w-full ">NiceAtNoon is een boutique design studio gespecialiseerd in branding en webdesign.</p>
       <button className="mt-[30px]  bg-white text-black rounded-2xl px-8 py-3">Bekijk projecten <i className="ri-arrow-right-line"></i></button>
       </div>
     
 
        
      </div>
       </div>
      </div>
    </div>
  );
};

export default Section1;
