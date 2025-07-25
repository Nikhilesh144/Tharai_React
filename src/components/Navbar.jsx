import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { MdMenu } from "react-icons/md";
import Img3 from "../images/logo.png";
import Marquee from "react-fast-marquee";
import Responsive from "./Responsive";
export default function Navbar(){
    const [isOpen,setIsOpen]=React.useState(false);
    return(
        <>
        <div className=" flex justify-between">
            <div className="flex items-center ">
                <Link className="flex items-center" to="/"><img src={Img3} className=" size-20" alt="" /> <h2 className="text-4xl" >Tharai<span className="text-4xl text-green-500">E</span>dutech</h2></Link>
            </div>
            <div className="hidden  lg:block" >
              <NavLinks/>
            </div>

            <div className="lg:hidden flex justify-center items-center mr-4" onClick={()=>setIsOpen(!isOpen)}>
              <MdMenu className="text-4xl" />
            </div>
           
        </div>
        <Marquee className="bg-green-400">
        Career-focused curriculum | Flexible learning options | Expert instructors | Hands-on projects | Collaborative learning environment | Job placement assistance | Scholarships based on performance | Live Q&A sessions | Continuous updates | Personalized learning paths
</Marquee>
        <Responsive isOpen={isOpen} setIsOpen={setIsOpen}/>
       
        </>
    )
}
