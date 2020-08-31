import React from 'react';
import web from "../src/images/Robots-Square.jpg";
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () =>{
    return  ( 
        <>
        <Common 
            name="grow your buisiness with"
            imgsrc={web}
            visit="/service"
            btname="Get started"

        />
    </>
    )
};

export default Home;