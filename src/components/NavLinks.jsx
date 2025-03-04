import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function NavLinks(){
    const links=[ { name:"Home",url:"/"   }, {name:"About",url:"about"},,{name:"Courses",url:"courses"},{ name:"Contact",url:"contact"   }]   
    const location=useLocation();
    const l=  links.map((links,index)=> 
        <div className="flex justify-center items-center pt-4">
            <Link className={`${location.pathname.slice(1) == links.url?" border-b-[2px] border-green-500":"none"}  `} key={index} to={links.url}> {links.name}</Link>
        </div>
    )
  

    return(
        <>
       <div className="flex items-center justify-center gap-3 p-2 text-xl  mr-6 font-light">
        {l}
        
       </div>
        </>
    )
}
