import React, { useContext } from 'react';
import AppContext from "../context/Context.js"; 
import { FaRegUserCircle } from "react-icons/fa";
import { PiFishSimpleDuotone } from "react-icons/pi";
import ReactDOM from "react-dom"; 
import PropTypes from "prop-types"; 

const DisplayChats = (props) => {
   const { isListening  , chats, setChats } = useContext(AppContext); 
   if (!chats || chats.length === 0) {
      return (<p style = {{textAlign: "center"}} className = "text-7xl"> Hi! How may I help you? </p>); 
   }
   return ((<div className = "container mx-auto px-3 pb-12"> {
         chats.map((item) => (
            <div>
               <div className="chat chat-start">
                  <div className="p-10 chat-bubble text-2xl"> { item.question } </div>
                  <FaRegUserCircle style = {{height: "40px", width: "40px"}}/>
               </div>
               <div className="chat chat-end">
                  <div className="p-10 chat-bubble text-2xl mb-10"> { item.answer } </div>
                  <PiFishSimpleDuotone style = {{height: "40px", width: "40px"}}/>
               </div>
            </div>
         ))
      }
      { isListening && <div style = {{color: "white"}}> Listening.... </div> } 
      </div>)
   )
}

export default DisplayChats;