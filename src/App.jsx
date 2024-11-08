// import './App.css'
import Navigation from "./Chats.jsx"
import { useState } from "react"

function App() {
  let [json,setJson]=useState([]);

  let submit = () =>{
    let data=prompt("enter json data");
    data=JSON.parse(data);
    setJson(data);
  }
  console.log(json);

  return (
    <>
      <button onClick={submit}>Submit</button>
      <br></br>
      <br></br>
      <Navigation data={json}/>
    </>
  )
}

export default App
