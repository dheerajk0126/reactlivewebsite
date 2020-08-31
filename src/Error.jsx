import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () =>{
    return ( 
        <>
         
          <div className="setStyle2">
          <h1>oops ,  page not found</h1>
          <p>sorry, This page does not existd</p>
          <NavLink to="/">Go Back</NavLink>
          </div>
        </>
    )
};

export default Error;