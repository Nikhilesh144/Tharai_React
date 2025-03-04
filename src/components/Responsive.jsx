import React from "react";
import {motion,AnimatePresence} from "framer-motion"
import { Link } from "react-router-dom";
export default function Responsive({isOpen ,setIsOpen}){
    return(
        <>
                <AnimatePresence mode="wait">
                        {
                            isOpen && <motion.div
                            initial={{opacity:0,y:-100}}
                            animate={{opacity:1,y:0}}
                            exit={{opacity:0,y:-100}}
                            transition={{duration:0.3}}
                            className=" absolute top-20  left-0  w-full h-screen z-20 lg:hidden"

                            >
                                <div className="text-xl font-semibold uppercase bg-green-400 text-white py-10 m-6 rounded-3xl">
                                    <ul className="flex flex-col justify-center items-center gap-10 ">
                                        <li> <Link onClick={()=>{setIsOpen(false)}} to="">Home</Link></li>
                                        <li> <Link onClick={()=>{setIsOpen(false)}} to="about">about</Link></li>
                                        <li> <Link onClick={()=>{setIsOpen(false)}} to="courses">courses</Link></li>
                                        <li> <Link onClick={()=>{setIsOpen(false)}} to="contact">contact</Link></li>
                                    </ul>
                                </div>
                            </motion.div>
                        }
                </AnimatePresence>
        </>
    )
}