import './App.css'
import React from 'react';
import Chats  from "./Chats";
import { useState } from 'react';

function App() {

  let [json,setJson]=useState([]);
  let [hide,setHide]=useState("block");  

  let func = () =>{
    let data = prompt("enter json format data");
    data=JSON.parse(data);
    setHide("none");
    setJson(data);
  }

  return (<>
    <button onClick={func} style={{display:hide}}>click me!</button>
    <Chats data={json}/>
  </>
  )
}

export default App