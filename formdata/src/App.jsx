import { useState } from "react"
import "./App.css";

function App() {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  function submit(e) {
    e.preventDefault()

    let data = {
      name,
      email,
      password
    }
    console.log(data);
    localStorage.setItem("sdata", JSON.stringify(data))
  }

  return (
    <>
      <form onSubmit={submit}>
        <h2>Sign up</h2>
        <input type="text" placeholder="Name" onChange={(e) => setname(e.target.value)} /><br></br>
        <input type="text" placeholder="Email" onChange={(e) => setemail(e.target.value)} /><br></br>
        <input type="text" placeholder="Password" onChange={(e) => setpassword(e.target.value)} /><br></br>
        <input type="submit"/>
      </form>
    </>
  )
}
export default App