import React from "react";
import { GrYoga } from "react-icons/gr";
import { HiComputerDesktop } from "react-icons/hi2";
import { GrAchievement } from "react-icons/gr";
import { GiPodiumWinner } from "react-icons/gi";
export default function Chooseus(){

    const WhyChooseData = [

        {
        id: 1,
        title: "One-on-one Teaching",
        desc: "All of our special education experts have a degree in  special education.", 
        icon: <GrYoga />,
        bgColor: "#0063ff",
        delay: 0.3,
        },
        {
            id: 2,
            title: "Online Training",
            desc: "The course is completly online and Recorded Sessions are provided with full time Trainer Support.", 
            icon: <HiComputerDesktop />,
            bgColor: "#0ab5b2",
            delay: 0.3,
         },
          {
                id: 3,
                title: "Global Certification",
                desc: "Unlock Your Potential with Our Globally Recognized Certification Program: Gain the Skills and Credentials Needed to Thrive in Any Industry, Anywhere in the World.", 
                icon: <GrAchievement />,
                bgColor: "#b00ab5",
                delay: 0.3,
            },
            {
                id: 4,
                title: "Placement Assistance",
                desc: "Performance based placement and internship.", 
                icon: <GiPodiumWinner />,
                bgColor: "#d0285b",
                delay: 0.3,
            }
    
    
    ]
    return(
        <>
        <div >
            <div className="container  ">
                <div className=" spacr-y-4 p-6 text-center mx-auto mb-5">
                <p className="text-uppercase font-semibold text-green-500">why choose us</p>
               <p className="text-3xl font-semibold">Benifits of Enrolling with us</p>
        
                </div>

            </div>
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {
                        WhyChooseData.map((item)=>{
                            return(
                                <div className="space-y-6 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]">
                               
                                    <div className="flex justify-center items-center">
                                        <div style={{backgroundColor:item.bgColor}} className="flex text-2xl justify-center items-center rounded-lg w-10 h-10 text-white">
                                        {item.icon}
                                        </div>
                                       
                                    </div>
                                    <p className="font-semibold text-center  ">{item.title}</p>
                                    <p   className=" text-center text-sm text-gray-700  ">{item.desc}</p>
                                
                                </div>
                            )

                        })
                    }
                </div>
        </div>
    
        </>
    )
}