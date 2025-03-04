import React from "react";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import Chooseus from "./Chooseus";
import Img1 from "../assets/banner1.png";
import Img2 from "../assets/banner2.png";
import Banner from "./Banner";
import Subject from "./Subject";
export default function HomePage(){

    const BannerData = {
        image: Img1,
        tag: "CUSTOMIZE WITH YOUR SCHEDULE",
        title: "Personalized Professional Online Tutor on Your Schedule",
        subtitle:
          "Our scheduling system allows you to select based on your free time   . Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility   ",
        link: "#",
      };
      
      const BannerData2 = {
        image: Img2,
        tag: "QUALITY TRAINING",
        title: "Talented and Qualified Tutors to Serve You for Help",
        subtitle:
          " we are committed to delivering top-notch online training that empowers learners with the skills they need to succeed. Our expert-led courses are designed with interactive content, real-world applications, and flexible learning options to cater to students, professionals, and lifelong learners.",
        link: "#",
      };

    return(
        <>
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
               <div className="flex flex-col justify-center py-1 md:pr-16 xl:pr-10 md:py-0 ">
                <div className="text-center md:text-left space-y-6  md:p-40" >
                    <p className="uppercase font-semibold text-green-700 text-xl">100% placement guarantee</p>
                    <h1 className="text-5xl font-semibold ">Empower your Learning Journey With <span className="text-5xl text-green-500">Tharai</span></h1>
                    <p>our platform offers engaging courses, interactive tutorials, and expert guidance to help you level up your skills. Join us and unleash your coding superpowers today!</p>
                   <div className="flex gap-4">
                    <Link to="about" className="bg-green-500 p-5 rounded-full text-white font-semibold">LEARN MORE</Link>
                    <Link to="courses" className="bg-green-500 p-5 rounded-full font-semibold">VIEW COURSES</Link>
                    </div>
                </div>
               </div>
               <div>
                <img src="../src/images/boy.png" alt="" />
               </div>

              </div>        
            <div className="bg-green-400 py-12 text-white">
                <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-5xl font-semibold"><CountUp start={0} end={20} duration={3} enableScrollSpy={true} scrollSpyOnce= {true}/></p>
                        <p>Expert Tutors</p> 
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <p className="text-5xl font-semibold"><CountUp start={0} end={10000} suffix="+" duration={3} enableScrollSpy={true} scrollSpyOnce= {true}/></p>
                        <p>Hours Content</p> 
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <p className="text-5xl font-semibold"><CountUp start={0} end={200} suffix="+" duration={3} enableScrollSpy={true} scrollSpyOnce= {true}/></p>
                        <p>Active Students</p> 
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <p className="text-5xl font-semibold"><CountUp start={0} end={31} duration={3} enableScrollSpy={true} scrollSpyOnce= {true}/></p>
                        <p>courses  </p> 
                    </div>
                </div>

            </div>
            <Chooseus/>
            <Banner {...BannerData} />
            <Banner {...BannerData2} reverse={true} />
            <Subject/>
          



        </>
    )
}