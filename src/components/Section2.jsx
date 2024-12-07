import React from "react";

function Section2() {
  return (
    <div>
      <div className="midprt">
        <div className="image pl-20 flex gap-6 overflow-x-scroll ">
          <div className="img1 w-[30%] h-[650px] flex-shrink-0  ">
            <img
              className="rounded-[100px] h-full w-full"
              src="src/assets/img1.webp"
              alt=""
            />
          </div>
          <div className="img2  w-[30%] h-[650px] flex-shrink-0 ">
            <img
              className="rounded-[100px] h-full  w-screen"
              src="src/assets/img22.webp"
              alt=""
            />
          </div>
          <div className="img3 w-[30%] h-[650px] flex-shrink-0 ">
            <img
              className="rounded-[100px] h-full w-screen object-cover  "
              src="src/assets/img33.webp"
              alt=""
            />
          </div>
          <div className="img4 w-[30%] h-[650px] flex-shrink-0 ">
            <img
              className="rounded-[100px] h-full w-screen object-cover  "
              src="src/assets/img44.webp"
              alt=""
            />
          </div>
          <div className="img5 w-[30%] h-[650px] flex-shrink-0 ">
            <img
              className="rounded-[100px] h-full w-screen object-cover  "
              src="src/assets/img55.webp"
              alt=""
            />
          </div>
        </div>
        <div className="imgbtm mt-10 pl-20 ">
          <p className="text-[25px] w-[1300px]  leading-8 font-sans">
            NiceAtNoon is een fijnschalige design studio voor merken die de
            hoofden en de harten van hun publiek willen veroveren. Geobsedeerd
            door de magie van design, geloven we sterk in de kracht van
            'story-driven design'; het geeft jouw unieke merkverhaal
            geloofwaardigheid, zeggingskracht en een niet te negeren
            aantrekkingskracht. Raak en verbind jouw doelgroepen als nooit
            tevoren!
          </p>
          <button className=" px-7 py-2 rounded-2xl border-2  bg-white mt-10">Leer ons kennen <i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
