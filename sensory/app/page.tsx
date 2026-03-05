import Image from "next/image";

import Group from "../../sensory/public/Group.png";

const items = [
  {
    svg: (
      <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 384 512"
    className="stroke-white fill-black w-7 h-7"><path d="M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z"/></svg>
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
  return (
    <section>
      <nav className="mx-auto max-h-screen bg-white border-b border-black py-4 px-24">
        <div className="flex text-black items-center justify-between">
          <div>
            {items.map((items,index)=>(
              <div key={index} className="flex gap-2 items-center text-black">
                <div>{items.svg}</div>
                <div>{items.text}</div>
              </div>
            ))}
          </div>
          <div>
            <button className="bg-black text-white p-4 cursor-pointer ">Contribute to this Service</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <div className="bg-white py-12 px-24 ">
        <div className="flex justify-between items-center">
          <div className=" max-w-xl py-6">
            <h1 className="text-black text-8xl">Status:<span className="text-yellow-400">ON</span></h1>
            <p className="text-black max-w-xl">NB: The light status information provided on this website is intended for reference purposes only. While we strive to offer accurate and up-to-date data, we cannot guarantee its absolute precision.</p>
          </div>
          {/*  */} <div className="py-0 p-0">
            <Image
            src={Group}
            alt=""
            width={300}
            height={600}
            />
          </div>

        </div>
        <div className="">
          <h1 className="underline text-2xl text-black">Ligth History</h1>  
          
          <div className="">
            {sensory.map((sensory,index)=>(
              <div key={index}>
                <div className="text-black">{sensory.texts}</div>
                <div className="text-black">{sensory.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
}
