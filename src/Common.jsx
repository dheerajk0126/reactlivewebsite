import React from 'react';
import web from "../src/images/Robots-Square.jpg";
import { NavLink } from 'react-router-dom';

const Common = (props) =>{
    return  ( 
        <>
         <section id="header" className="d-flex align-item-center">
          <div className="container-fluid ">
            <div className='row'>
                <div className="col-10 max-auto">
                   <div className="row">
                    <div className="col-mid-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>
                         {props.name}
                            <strong className="brand-name">Thapa technical</strong>
                        </h1>
                        <h2 className="my-3">
                        we are the team of talented developer making website
                        </h2>
                        <div className="mt-3">
                         <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                                  
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-2  header-img">
                      <img src={props.imgsrc} className="img-fluid animated" alt="common img"/>

                    </div>
                    </div>
                </div>
            </div>

          </div>

         </section>
    </>
    )
};



export default Common;