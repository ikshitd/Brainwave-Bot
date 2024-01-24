import React, { useContext } from 'react';
import AppContext from "../context/Context.js"; 
import { GrRefresh } from "react-icons/gr";
import { FaMicrophoneLines } from "react-icons/fa6";

const UserSearch = (props) => { 
   const { handleListen, input, handleClick, setInput, result, addChat, handleSpeak } = useContext(AppContext); 
   const handle = () => {
         const newChat = {
            question: input, 
            answer: result
         }; 
         addChat(newChat); 
         return;
   };
   return (
    <div>
      <div> 
         <div> 
            <div className = "form-control"> 
               <div className = "relative"> 
                  <input onChange = {(e) => {
                     setInput(e.target.value); 
                  }} value = {input} placeholder = "Search" type = "text" className = "text-2xl h-30 w-full pr-40 bg-gray-200 input input-lg text-black"> 
                  </input>
                  <button style = {{borderWidth: "1px", borderColor: "white"}} onClick = {handleClick} className = "absolute top-0 right-36 h-30 w-36 btn btn-lg text-2xl"> 
                     Go
                  </button>
                  <button style = {{borderWidth: "1px", borderColor: "white"}} onClick = {handle} className = "absolute top-0 right-0 h-30 w-36 btn btn-lg"> 
                     <GrRefresh className = "text-2xl"/> 
                  </button>
                  <button style = {{borderWidth: "1px", borderColor: "white"}} onClick = {handleListen} className = "absolute top-0 right-72 h-30 w-36 btn btn-lg"> 
                     <FaMicrophoneLines className = "text-2xl" />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default UserSearch;