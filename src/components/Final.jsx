import React from 'react'

function Final() {
  return (
    <div className='w-[100%]    bg-black'>
        <div className="top">
            <div className="p-20 justify-between flex left">
                <h1 className='text-6xl font-sans font-semibold text-white'>Let's turn some heads!</h1>
                <div className='pt-9'>
                </div>
                <div className=" flex right">
                    <div className='flex space-x-11'>
            <div className="text-gray-500 text-[15px] items-center  flex font-medium flex-col gap-2 one">
            <h2>Socials</h2>
             <button><a href="#">INSTAGRAM</a></button>
            <button><a href="#">LINKDEN</a></button>
             
            
        </div>
        <div className="text-gray-500 text-[15px] items-center font-medium flex flex-col gap-2  two">
            <h2>Sitemap</h2>
            <button><a href="#">HOME</a></button>
            <button><a href="#">PROJECTEN</a></button>
            <button><a href="#">OVER</a></button>
            <button><a href="#">CONTACT</a></button>
        </div>
        <div className="text-gray-500 text-[15px] items-center  font-medium flex flex-col gap-2  three">
            <h2>info</h2>
            <button><a href="#">ALGEMENEVOORWARDEN</a></button>
            <button><a href="#">PRIVACYBELIED</a></button>
            <button><a href="#">COOKIEBELIED</a></button>
            
        </div>
        </div>
                </div>
            </div>
           
        </div>
        <div className="btm">
            <img src="src/assets/lastimg.png" alt="" />
        </div>
         
    </div>
  )
}

export default Final