import React from 'react';
import web from "../src/images/Robots-Square.jpg";
import { NavLink } from 'react-router-dom';
import Common from './Common';

const About = () =>{
    return  ( 
        <>
        <Common name='Welcome to about page' imgsrc={web} visit="/contact" btname="contact now"/>
    </>
    )
};



export default About;