import React from "react";
import { useParams,useLocation,useHistory } from "react-router-dom"; 


const User = () =>{
    const {fname,lname}=useParams();
    const location=useLocation();
    const history=useHistory();
    console.log("ggggggggg"+history);
    return (
        <>
        <h1>User,{fname}{lname}</h1>
        <p>My current location is {location.pathname}</p>
        {location.pathname ===`/user/vinod/thapa`?( 
            <button onClick={()=>history.push("/")}>click me</button>)
            :null}
        </>
    ) 
};

export default User;