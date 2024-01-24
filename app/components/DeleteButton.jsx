import React, {useContext } from 'react';
import ReactDOM from "react-dom"; 
import AppContext from "../context/Context.js"; 
import { RxCross2 } from "react-icons/rx";

const DeleteButton = (props) => {
   const { chats, deleteChats } = useContext(AppContext);
   return (chats.length >= 1 && (
      <div className = "align-middle place-items-center justiy-end"> 
      <button onClick = {deleteChats} style = {{alignItems: "center", position: "relative", borderWidth: "1px", borderColor: "white"}} className = "absolute p-4 border btn btn-lg text-lg"> 
      <RxCross2 /> 
      </button>
    </div>)
  )
}

export default DeleteButton;