import { useState } from "react"

function App(){
  const[data,setdata]=useState(100)
  return(
    <>
    <h1>counter : {data}</h1>

    <button onClick={()=>setdata(data+5)}>+</button>
    <button onClick={()=>setdata(data-5)}>-</button>
    </>
  )
}
export default App