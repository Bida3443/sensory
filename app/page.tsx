"use client"
import Image from "next/image"


import {useState} from "react"; 

import Group from "../../sensory/public/Group.png"
// import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle"

const items = [
  {
    svg: (
      <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 384 512"
    className="stroke-white fill-black dark:fill-white w-7 h-7"><path d="M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z"/></svg>
    ),
    text: "Sensory",
    link: ""
  }
] 
const sensory = [
  {
    texts:"Brought Light",
    date:"12:30 AM 12/07/2023"
  },
  {
    texts:"Took Light",
    date:"12:30 AM 12/07/2023"
  },
  {
    texts:"Brought Light",
    date:"12:30 AM 12/07/2023"
  },
  {
    texts:"Took Light",
    date:"12:30 AM 12/07/2023"
  },
]


export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu =() => {

    setIsOpen(!isOpen);

  }

 
  return (
    <section>

      <nav className="mx-auto max-h-screen bg-white dark:bg-black border-b transition-all duration-300 border-black dark:border-white py-4 px-24">
        <div className="flex text-black dark:text-white transition-all duration-300 items-center justify-between">
          <div>
            {items.map((items,index)=>(
              <div key={index} className="flex gap-2 items-center dark:text-white text-black">
                <div>{items.svg}</div>
                
                <div>{items.text}</div>
                {/* <div>
                  <Button>Button 1</Button>
                  <Button variant="secondary">Button 2</Button>
                </div> */}
                <ThemeToggle/>
                <ThemeToggle/>
              </div> 
            ))}
          </div>

          <div className="hidden lg:block">
        <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3">
        Contribute to this Service
        </button>
          </div>

          <div className="lg:hidden">
            <button 
            onClick={toggleMenu} 
            className= "cursor-pointer "
            > 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512"
              className="h-7 w-7 fill-black  dark:fill-white"
              >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
              </svg>
            </button>
          </div>

        </div>
      </nav>


      {/* Hero Section */}

      <div className="bg-white dark:bg-black pb-5 px-24  lg:h-screen  ">
        
          <div className="flex lg:flex-row flex-col justify-between  items-center">
          <div className="flex flex-col order-2 lg:order-1 lg:justify-center lg:items-start items-center">
            <div className=" max-w-xl py-6 ">
            <h1 className="text-black dark:text-white lg:text-8xl text-6xl lg:justify-start lg:text-start text-center justify-center font-semibold tracking-tight">Status:<span className="text-yellow-400">ON</span></h1>
            <p className="text-black dark:text-white lg:text-justify max-w-2xl lg:justify-start text-center justify-center ">NB: The light status information provided on this website is intended for reference purposes only. While we strive to offer accurate and up-to-date data, we cannot guarantee its absolute precision.</p>
          </div>

          <div className=" flex flex-col lg:text-start text-center  ">
          <h1 className="underline text-2xl text-black dark:text-white ">Ligth History</h1>  
          
          <div className="space-y-2">
            {sensory.map((sensory,index)=>(
              <div key={index}>
                <div className="text-black dark:text-white font-bold">{sensory.texts}</div>
                <div className="text-black dark:text-white text-sm">{sensory.date}</div>
              </div>
            ))}
          </div>

        </div>
          </div>

          {/*  */} 
          <div className=" order-1 lg:order-2 right-24 top-0">
            <Image
            src={Group}
            alt=""
            width={300}
            height={600}
            />
          </div>
        </div>
        </div>
      
            {/* Footer Section */}
      <div className="text-black dark:text-white gap-6 bg-white dark:bg-black flex lg:flex-row flex-col justify-center lg:justify-between border-t items-center border-black dark:border-white py-6 px-24 ">
        <p className="lg:order-1 order-2">© 2023 Sensory. All Rights Reserved.</p>
        <div className="flex lg:flex-row flex-col gap-6 items-center lg:order-2 order-1">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      
    </section>
  );
}
