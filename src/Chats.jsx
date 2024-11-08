import "./Chats.css";
import React from 'react';

export default function Chats({data}) {
  let count=1;

  return (
    <div className="chats"> 
      {
        data.map((f)=>(
          <a href="#" className="d-flex align-items-center">
          <h6>{count++}</h6>
          <div className="flex-shrink-0">
                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                <span className="active"></span>
           </div>
            <div className="flex-grow-1 ms-3">
                <h3>{f.name || "name"}</h3>
                <p>{f.message || f.lastMessage || "last message"}</p>
            </div>
          </a>                                                        
        ))
      }
  </div>
  );
}