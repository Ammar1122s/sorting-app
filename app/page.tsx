'use client'
import { userSortingAlgoContext } from "@/context/Visualizer";
import { useEffect } from "react";


export default function Home() {
  const{arraytoSort, isSorting} = userSortingAlgoContext();

  return (
   <main className="absolute top-0 h-screen w-screen z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#150229_1px)] bg-[size:40px_40px]">
    <div id="content-container" className="flex max-w:[1020px] w-full flex-col lg:px-0 px-4">

      <div className="h-[66px]  relative flex items-center justify-between w-full">
        <h1 className="text-gray-300 text-2xl font-light hidden md:flex">
          Sorting Visualizer
        </h1>
        <div>
          Controls
        </div>
      </div>
      <div className="relative h-[calc(100hv-66px) w-full]">
        <div className="absolute bottom-[30px] w-full max-auto left-0 right-0 flex justify-center items-end">
          {
            arraytoSort.map((item, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full bg-gray-300"
                style={{
                  transform: `translateX(${item * 10}px)`,
                }}
              ></div>
              

            ))
          }
        </div>

      </div>
      

    </div>

   </main>
  );
}
