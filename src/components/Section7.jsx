import React from 'react'

function Section7() {
  return (
    <div className=' pl-16  h-screen relative bg-white'>
      <div className=" text-black font-bold text-2xl border-b-2 mr-36 border-black h11">
        <h1>Did some cool stuff for</h1>
      </div>
      <div className=" pt-6 flex space-x-64">
        <div className="text-gray-500 text-2xl flex font-medium flex-col gap-2 one">
            <h2>Bewakingsdienst van MOOK</h2>
            <h2>Van der Heijden bouw</h2>
            <h2>Speyz</h2>
            <h2>Zeth</h2>
        </div>
        <div className="text-gray-500 text-2xl  font-medium flex flex-col gap-2  two">
            <h2>Ozo Verbindzorg</h2>
            <h2>Signal Stream</h2>
            <h2>Gaaf creaties</h2>
            <h2>Lunenburg Events</h2>
        </div>
        <div className="text-gray-500 text-2xl font-medium flex flex-col gap-2  three">
            <h2>Twofiftyk</h2>
            <h2>Adekwaad</h2>
            <h2>Zoet moment</h2>
            <h2>Forex library</h2>
        </div>
      </div>
      <div className=" animate  rotate-icon victory flex left-[80%] top-[40%] pr-4 absolute">
        <img className='w-[170px]' src="src/assets/victory.svg" alt="" />
      </div>
    </div>
  )
}

export default Section7
