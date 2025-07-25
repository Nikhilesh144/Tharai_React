import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../images/travel.png";
import Img2 from "../images/chits.png";
import Img3 from "../images/med.png";
import Img4 from "../images/about.jpg";
import Img5 from "../images/vision.jpg";
import Img6 from "../images/mission.jpg";
import Img7 from "../images/p1.png";
import Img8 from "../images/p2.png";
import Img9 from "../images/p3.png";

export default function About(){

      const WhyChooseData = [
    
            {
            id: 1,
            title: "Tharai Travels",
            desc: "All of our special education experts have a degree in  special education.", 
            img:Img1,
         
            bgColor: "#0063ff",
            delay: 0.3,
            },
            {
                id: 2,
                title: "Tharai Chitfunds",
                desc: "The course is completly online and Recorded Sessions are provided with full time Trainer Support.", 
              img:Img2,
                bgColor: "#0ab5b2",
                delay: 0.3,
             },
              {
                    id: 3,
                    title: "Bogar Medicals",
                    desc: "Unlock Your Potential with Our Globally Recognized Certification Program: Gain the Skills and Credentials Needed to Thrive in Any Industry, Anywhere in the World.", 
                    img:Img3,
                    bgColor: "#b00ab5",
                    delay: 0.3,
                },
            ]

    return(
       <>
       <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
               <div className="flex flex-col justify-center py-1 md:pr-16 xl:pr-10 md:py-0 ">
                <div className="text-center md:text-left space-y-6  md:p-20" >
                   
                    <h1 className="text-3xl font-semibold ">Unveiling Tharai: Your Pathway to Programming  <span className="text-4xl text-green-500">Success</span></h1>
                    <p>Our platform is designed to empower learners with comprehensive resources, interactive tutorials, and real-world projects that foster creativity and skill development. Whether you're a beginner taking your first steps into the world of coding or an experienced developer looking to expand your expertise, we have something for you.</p>
                  
                </div>
               </div>
               <div>
                <img src= {Img4} alt="" />
               </div>

              </div>  

              <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
               <div className="flex flex-col-reverse order-last justify-end py-1 md:pr-16 xl:pr-10 md:py-0 ">
                <div className="text-center md:text-left space-y-6  md:p-20" >
                   <h1 className=" text-3xl font-semibold text-green-400 flex items-center justify-center">Our Vision</h1>
    
                    <p>Our vision for the Tharai EduTech is simple: to make high-quality technical education accessible to all. Through our platform, we aim to break down barriers to learning, empower individuals worldwide, and prepare them for success in the ever-evolving tech industry. We're committed to providing a dynamic learning environment, fostering a supportive community, and staying at the forefront of technology trends. Our ultimate goal is to empower people to pursue their passions, unlock their potential, and make a positive impact on the world through the transformative power of technology..</p>
                    <ul  className="flex justify-center items-center flex-col ">
                    <li className="flex  justify-center items-center   h-14 ">
                        <img src={Img7} alt=""  className="w-10 h-10 m-10"/> <p>Empower individuals worldwide with accessible, high-quality programming education.</p>
                    </li>
                    <li className="flex justify-center items-center h-14" >
                        <img src={Img8}alt=""  className="w-10 h-10 m-10"/> <p>Bridge the gap between theoretical knowledge and practical application through hands-on projects.</p>
                    </li>
                    <li className="flex justify-center items-center h-14" >
                        <img src={Img9}alt=""  className="w-10 h-10 m-10"/> <p>Provide performance-based scholarships for outstanding students.</p>
                    </li>
                </ul>
                </div>
               </div>
               <div>
                <img src={Img5} alt="" />
               </div>

              </div>    

              <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
               <div className="flex flex-col justify-center py-1 md:pr-16 xl:pr-10 md:py-0 ">
                <div className="text-center md:text-left space-y-6  md:p-20" >
                   
                <h1 className=" text-3xl font-semibold text-green-400 flex items-center justify-center">Our Mission</h1>
               <p   className=" text-3xl font-semibold text-green-900 flex items-center justify-center"> Crafting Futures: Our Mission to Empower Through Code</p> 
                <p className="font-semibold">At Tharai, we're not just teaching code; we're igniting a digital revolution. Founded on a passion for technology and a commitment to accessible education, our platform is dedicated to empowering individuals worldwide to unlock their potential through the mastery of programming. With a dynamic team of industry experts and a relentless focus on innovation, we're reshaping the future one line of code at a time.</p>  
                </div>
               </div>
               <div>
                <img src={Img6} alt="" />
               </div>

              </div> 
        {/* <div className="">
            <div className=" flex text-center justify-center items-center ">
                            <p className="text-3xl font-semibold text-green-400 mb-4    ">Our Vision </p> 
            </div> */}
            {/* <div className="flex justify-between items-start  md:pr-16 xl:pr-10 md:py-0">
                <img src="../src/images/vision.jpg" className="w-96 h-96" alt="" />
                <div>
                <p>Our vision for the Tharai EduTech is simple: to make high-quality technical education accessible to all. Through our platform, we aim to break down barriers to learning, empower individuals worldwide, and prepare them for success in the ever-evolving tech industry. We're committed to providing a dynamic learning environment, fostering a supportive community, and staying at the forefront of technology trends. Our ultimate goal is to empower people to pursue their passions, unlock their potential, and make a positive impact on the world through the transformative power of technology.</p>
                <ul  className="flex justify-center items-center flex-col ">
                    <li className="flex  justify-center items-center   h-12 ">
                        <img src="../src/images/p1.png" alt=""  className="w-10 h-10 m-10"/> <p>Empower individuals worldwide with accessible, high-quality programming education.</p>
                    </li>
                    <li className="flex justify-center items-center h-12" >
                        <img src="../src/images/p2.png" alt=""  className="w-10 h-10 m-10"/> <p>Empower individuals worldwide with accessible, high-quality programming education.</p>
                    </li>
                </ul>
                </div>
               
                
           
            </div> */}

            
          
            
            
            
        {/* </div>       */}
       
        <div >
            <div className="container  ">
                <div className=" spacr-y-4 p-6 text-center mx-auto mb-5">
                <p className="text-uppercase font-semibold text-green-500 text-4xl">Our Establishment</p>
               <p className="text-3xl font-semibold">Diverse ventures, spanning industries wide.</p>
        
                </div>

            </div>
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 mb-7">
                    {
                        WhyChooseData.map((item)=>{
                            return(
                                <div className="space-y-6 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]">
                               
                                    <div className="flex justify-center items-center">
                                        <div  className="flex text-2xl justify-center items-center rounded-lg w-16 h-10">
                                            <img src={item.img} alt="" />
                                        </div>
                                       
                                    </div>
                                    <p className="font-semibold text-center  ">{item.title}</p>
                                   
                                
                                </div>
                            )

                        })
                    }
                </div>
        </div>
    
       </>
    )
}