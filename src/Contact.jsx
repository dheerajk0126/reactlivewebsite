import React, { useState } from 'react';

const Contact = () =>{

const [data,setData]=useState({
fullname:"",
phone:"",
email:"",
msg:""
}
);

const InputEvent=(event)=>{
    const {name,value}=event.target;

    setData((preVal)=>{
        return {
            ...preVal,
            [name]:value,
        }
    })

}

const formSubmit=(e)=>{
    e.preventDefault();

}

    return (
        <>
            <div className="my-5">
            <h1 className="text-center">contact us</h1>
            </div>

            <div className="container contact_div">

              <div className="row">
                <div className="col-mid-6 col-10  mx-auto">

               
                 <form onSubmit={formSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">FullName</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname"   
    value={data.fullname} onChange={InputEvent} placeholder="enter your name"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" name="phone"  value={data.phone} onChange={InputEvent} placeholder="enter your number"/>
  </div>

  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="enter your email"/>
  </div>
 
 
  
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
    name="msg"
    value={data.msg}
    onChange={InputEvent}
    ></textarea>
  </div>
    <div className="col-12">
    <button className="btn btn-outline-secondary" type="submit">Submit form</button>
    </div>
</form>
              

                </div>

              </div>

            </div>
           
        </>

    ) 
};

export default Contact;