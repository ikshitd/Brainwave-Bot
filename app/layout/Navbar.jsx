"use client"
import React, {useContext} from "react"; 
import { PiFishSimpleDuotone } from "react-icons/pi";
import Link from "next/link"; 
import DeleteButton from "../components/DeleteButton.jsx"; 

const Navbar = () => {
   return (
      <nav className = "p-10 navbar mb-20 shadow-lg bg-neutral text-neutral-content"> 
         <div className = "container mx-auto"> 
            <div className = "flex-none px-2 mx-2"> 
               <PiFishSimpleDuotone className = "inline pr-2 text-6xl" />
               <Link href = "/" className = "text-3xl font-bold align-middle"> PhishGPT </Link> 
            </div>
            <div className = "flex-1 px-2 mx-2"> 
               <div className = "flex justify-end"> 
                  <Link href = "/" className = "text-2xl btn btn-ghost btn-sm rounded-btn"> Home </Link>
                  <Link href = "/about" className = "text-2xl btn btn-ghost btn-sm rounded-btn"> About </Link>
               </div>
            </div>
            <DeleteButton />
         </div>
      </nav>
   )
}; 

export default Navbar; 