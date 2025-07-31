import { useState } from "react"

function App() {
   const [color,setColor]=useState("olive");
  return (
    <div className="w-full h-screen duration-400" style={{backgroundColor:color}}>
     <div className="flex flex-wrap fixed justify-center bottom-48 inset-x-0 px-2">

       <div className="fixed flex-wrap justify-center gap-3 shadow-lg bg-white text-red-600 px-3 py-2  rounded-3xl flex">
        
          <button className="outline-none  rounded text-white px-4 py-1 " style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>
            Red
          </button>
          <button className="outline-none  rounded text-white px-4 py-1 -300" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>
            Green
          </button>
          <button className="outline-none  rounded text-white px-4 py-1" style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>
            Black
          </button>
          <button className="outline-none  rounded text-white px-4 py-1" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>
            Yellow
          </button>
       </div>

       
     </div>
    </div>
  )
}

export default App
