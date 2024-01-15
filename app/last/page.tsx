"use client";
import Image from "next/image";


export default function Loading() {
  return (
    <div className="absolute flex justify-center items-center  w-screen h-screen bg-gray-800 ">
      <h1 className="text-white font-bold"> Ödemeniz başarıyla gerçekleşti.</h1>
      <div className="absolute flex justify-center items-center   bg-gray-800 mt-10 ">

      <a href="/mainPage" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Geri dön</a>
      </div>

       
            
      </div>

    

  );
}