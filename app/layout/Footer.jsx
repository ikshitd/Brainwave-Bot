import React from 'react'; 

const Footer = () => {
  const footerYear  = new Date().getFullYear(); 
  return (
    <div>
      <footer className = "footer p-10 bg-grey-700 text-primary-content footer-center bg-neutral">  
          <div> 
              <p style = {{color: "white"}} className = "text-2xl"> Copyright &copy; {footerYear} All rights reserved</p>
          </div>
      </footer>
    </div>
  )
}

export default Footer;