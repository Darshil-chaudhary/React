import { useState } from "react";

function App() {

  const initialstate = {
    name: "",
    email: "",
    password: ""
  }

  const [data, setdata] = useState(initialstate)

  function handlechange(e){
    setdata({...data,[e.target.name]:e.target.value})
  }
  function handlesubmit(e){
    e.preventDefault();
    console.log(data)
    localStorage.setItem("sdata",JSON.stringify(data))
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Username" name="name" onChange={(e)=>handlechange(e)} /><br />
        <input type="text" placeholder="Email" name="email" onChange={(e)=>handlechange(e)} /><br />
        <input type="text" placeholder="Password" name="password" onChange={(e)=>handlechange(e)} /><br />
        <input type="Submit" />
      </form>
    </>
  )

}
export default App