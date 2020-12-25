import React from "react";
import { Link } from "gatsby";
 const Hello =()=>{
return(
    <div>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <h1>Welcome To Home</h1>
    </div>
)
}
export default  Hello;
