// import Image from "next/image";

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

export default function Home() {
  return (
    <section>
      <nav className="mx-auto max-h-screen bg-white py-6 px-24">
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
            <button className="bg-black text-white p-4 ">Contribute to this Service</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <div>vvvvvvv</div>
    </section>
  );
}
