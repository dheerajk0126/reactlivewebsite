import React from 'react';

const Footer= () =>{
   const year=new Date().getFullYear();
   return (
      <>

           <footer className="w-100 bg-light text-center">
            <p>copyright © {year} Thapatechnical.All Right Reserved|Terms and condition </p>
         </footer>

      </>
   ); 
};

export default Footer;