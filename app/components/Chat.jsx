"use client"
import React, { useState, useContext } from 'react';
import useLLM from "usellm"; 
import { ImHeadphones } from "react-icons/im";
import AppContext from "../context/Context.js"; 
import { IoIosArrowUp } from "react-icons/io";
import { GrRefresh } from "react-icons/gr";
import UserSearch from "./UserSearch.jsx"; 
import { PiFishSimpleDuotone } from "react-icons/pi";

const Chat = () => {
   const { input, handleClick, setInput, result, setResult, addChat } = useContext(AppContext); 
   return (
    <div className = "container mx-auto p-10 mb-8"> 
      <div className = "chat chat-end">
        <div value = { result } className = "mb-10 chat-bubble text-2xl"> { result } </div>
        <PiFishSimpleDuotone className = "mb-10" style = {{height: "40px", width: "40px"}}/>
      </div>
      <UserSearch /> 
    </div>
  )
}

export default Chat;