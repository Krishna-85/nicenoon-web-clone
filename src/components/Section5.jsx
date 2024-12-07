import React from "react";

function Section5() {
  return (
    <div className="w-full  p-11 bg-white ">
      <div className="top1">
        <div className="content flex justify-between">
          <div className="left">
            <h3 className="font-medium">Services</h3>
            <h1 className="pt-11 text-3xl font-medium ">
              Zo onderscheiden we <br /> je van de norm
            </h1>
          </div>
          <div className="right">
            <button className="text-1xl px-14 py-4 rounded-2xl bg-black text-white border-black">
              Lees meer<i className="ri-arrow-right-line" />
            </button>
          </div>
        </div>
      </div>
      <div className="imgcont space-x-4   overflow-hidden pt-8 flex w-[100%] h-[80%]">
        <div className="box1 group w-[25%] h-[100%] ">
          <div className="top   overflow-hidden w-[100%] h-[50%]">
            <img
              className=" rounded-xl w-[400px] h-[241px] object-cover group-hover:rounded-[60px] transition-all ease-in duration-200  "
              src="src/assets/cards.jpg "
              alt=""
            />
          </div>
          <div className="btm rounded-xl group group-hover:rounded-[60px] transition-all ease-in duration-200 w-[100%] h-[50%] bg-purple-300">
            <div className="btn group">
              <button className="px-9 text-2xl py-7 items-center text-black font-normal">
                Brand story <i className=" group ri-arrow-right-line" />
              </button>
              <p className="text-black font-normal pt-4 pb-5 pl-7 text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                vitae enim, consequatur ad doloremque.
              </p>
            </div>
          </div>
        </div>
        <div className="box2  group w-[25%] h-[100%]  ">
          <div className="top rounded-xl group-hover:rounded-[60px] transition-all ease-in duration-200  overflow-hidden w-[100%] h-[50%] hover:rounded-[60px] transition-all ease-in duration-200  ">
            <img
              className=" w-[400px] h-[241px] object-cover "
              src="src/assets/bag.jpg"
              alt=""
            />
          </div>
          <div className="btm rounded-xl group group-hover:rounded-[60px] transition-all ease-in duration-200w-[100%] h-[50%] bg-zinc-900">
            <div className="btn group">
              <button className="px-9 text-2xl py-7 items-center text-white font-normal">
                Brand story <i className=" group ri-arrow-right-line" />
              </button>
              <p className="text-white font-normal pt-4 pb-5  pl-7 text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                vitae enim, consequatur ad doloremque.
              </p>
            </div>
          </div>
        </div>
        <div className="box3 group w-[25%] h-[100%]  ">
          <div className="top rounded-xl group-hover:rounded-[60px] transition-all ease-in duration-200 overflow-hidden w-[100%] h-[50%] ">
            <img
              className=" w-[400px] h-[241px] object-cover hover:rounded-[60px] transition-all ease-in duration-200  "
              src="src/assets/laptop.jpg"
              alt=""
            />
          </div>
          <div className="btm rounded-xl group group-hover:rounded-[60px] transition-all ease-in duration-200  overflow-hidden w-[100%] h-[50%] bg-green-300">
            <div className="btn group">
              <button className="px-9 text-2xl py-7 items-center text-black font-normal">
                Brand story <i className=" group ri-arrow-right-line" />
              </button>
              <p className="text-black font-normal pt-4 pb-5  pl-7 text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                vitae enim, consequatur ad doloremque.
              </p>
            </div>
          </div>
        </div>
        <div className="box4 group w-[25%] h-[100%]   ">
          <div className="top rounded-xl group-hover:rounded-[60px] transition-all ease-in duration-200  overflow-hidden w-[100%] h-[50%]  ">
            <img
              className=" w-[400px] h-[241px] object-cover hover:rounded-[60px] transition-all ease-in duration-200  "
              src="src/assets/mobile.jpg"
              alt=""
            />
          </div>
          <div className="btm rounded-xl  group group-hover:rounded-[60px] transition-all ease-in duration-200 overflow-hidden w-[100%] h-[50%] bg-black">
            <div className="btn group">
              <button className="px-9 text-2xl py-7 items-center text-white font-normal">
                Brand story <i className=" group ri-arrow-right-line" />
              </button>
              <p className="text-white font-normal pt-4 pb-5  pl-7 text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                vitae enim, consequatur ad doloremque.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="para pt-10">
          <p className="text-2xl font-sans  w-[80%]">
            NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. Wars van
            jargon en allergisch voor bureau blabla, gaan we lekker samen aan de
            slag met jouw merk. En dat moet vooral leuk zijn! Want plezier nemen
            we serieus. Vanuit daar ontstaat enthousiasme, trots en het
            zelfvertrouwen om jouw merk de uitstraling te geven die het
            verdient.
          </p>
          <div className="btn pt-9">
            <button className=" text-white font-semibold text-1xl pl-4 pr-16 py-3 rounded-2xl bg-black">Contact<i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
