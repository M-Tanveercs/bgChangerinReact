import { useState } from 'react'

import './App.css'


function App() {
  const [color, setColor] = useState("olive")

  return (
  
       <div className="bg"style={{backgroundColor: color}}>
<h1>BackGround Changer</h1>
        
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center  shadow-lg  bg-white px-3 py-2 rounded-3xl gap-20">

             <button className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>

                  <button className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>Red</button>    <button className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>    <button className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "black"}} onClick={()=>setColor("black")}>Black</button>    <button className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "orange", color:"black"}} onClick={()=>setColor("orange")}>Orange</button>

          </div>
        </div>
       </div>

  )
}

export default App
