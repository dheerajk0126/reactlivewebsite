import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () =>{
    return ( 
        <>
           <NavLink exact activeClassName="active_class" to="/">AboutUs</NavLink>
           <NavLink exact activeClassName="active_class" to="/user">
           USER
           </NavLink>
           <NavLink exact activeClassName="active_class" to="/search">
           Search
           </NavLink>
           <NavLink exact activeClassName="active_class" to="/service">service</NavLink>

          
        </>
    ) 
};

export default Menu;