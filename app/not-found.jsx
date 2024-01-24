import React from 'react';
import {FaHome} from "react-icons/fa"; 
import Navbar from "./layout/Navbar.jsx"; 
import Footer   from "./layout/Footer.jsx"; 
import Link from "next/link"; 

const NotFound = () => {
  return (
    <div className = "flex flex-col h-screen justify-between">
      <Navbar />
      <div className = "hero flex items-center justify-center" > 
         <div className = "max-w-lg">
            <h1 className = "text-8xl font-bold mb-8"> Oops !!</h1>
            <p className = "text-4xl mb-8"> 404- Page Not Found !! </p> 
            <Link href = "/" className = "btn btn-primary btn-lg">
               <FaHome className = "mr-2 text-6xl"/>
               Back To Home
            </Link>
         </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound;