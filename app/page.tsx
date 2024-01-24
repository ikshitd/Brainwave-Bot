"use client"
import React, { useEffect } from "react"; 
import Chat from "./components/Chat.jsx";
import Navbar from "./layout/Navbar.jsx"; 
import Footer from "./layout/Footer.jsx"; 
import DeleteButton from "./components/DeleteButton.jsx"; 
import DisplayChats from "./components/DisplayChats.jsx";
import Speech from "./components/Speech.jsx"; 

export default function Home() {
  return (
      <div className = "flex flex-col h-screen justify-between"> 
        <Navbar />
        <DisplayChats />
        <Chat /> 
        <Footer />
     </div>
  ); 
}
