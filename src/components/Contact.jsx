import React from "react";
import emailjs from "@emailjs/browser";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useRef } from "react";
import { Form } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import contactImg from "../images/contact.jpg";
export default function Contact(){

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_7wa3gui", "template_kk3irla", form.current, {
        publicKey: "e58c28NnxtYYixFV7",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

    return(
        <>
               <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
               <div className="flex flex-col justify-center py-1 md:pr-16 xl:pr-10 md:py-0 ">
                <div className="text-center md:text-left space-y-6  md:p-20" >

                <p className="text-2xl text-green-600">Let's Connect!
                Have a question or just want to say hello? We'd love to hear from you! Use the form below or reach out through our contact details. We're here to help! Looking forward to chatting with you!</p>       
                <p className="text-4xl font-semibold text-green-900">"Tharai Edutech"</p>           
                </div>
               </div>
               <div>
                <img src={contactImg}  className="size-auto" alt="" />
               </div>

              </div>  
              <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
               <div className="flex flex-col justify-start py-1 md:pr-16 xl:pr-10 md:py-0 ">
                <div className="text-center md:text-left space-y-6  md:p-20" >
                <h1 className="text-3xl text-green-600 font-semibold border-b-4 ">
                    Get In Touch
                    <p className="text-2xl text-black">Looking for help? Fill the form and start a new adventure</p>
                </h1>
                <h1 className="text-3xl text-green-600 font-semibold border-b-4   ">
                   Headquarters <FaHome />
                   <p className="text-xl text-black"> Tharai Tour & Travels 3rd St, Loganathan Nagar, Padmanabha Nagar, Choolaimedu, Chennai, Tamil Nadu -600094</p>
                    </h1>
                    <h1 className="text-3xl text-green-600 font-semibold border-b-4   ">
                  Phone <FaPhoneAlt />
                   <p className="text-xl text-black">   +91 757654857</p>
                    </h1>
                    <h1 className="text-3xl text-green-600 font-semibold border-b-4   ">
                  Support <HiOutlineMail />
                   <p className="text-xl text-black"> 
                    support@tharai.in
                   </p>
                    </h1>
              
                </div>
               </div>
               <div>
      <Form
        ref={form}
        onSubmit={sendEmail}
        action=""
        className="flex flex-col items-center justify-center mt-[5%]"
      >
        <h1 className="flex items-center justify-center font-semibold text-3xl text-[#40c45d]">
          Contact Us
        </h1>
        <input
          type="text"
          name="user_name"
          placeholder="Enter fullname"
          className="border-2 border-[#79dd3f] border-solid p-[20px] w-[380px] mt-[20px]"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Enter email"
          className="border-2 border-[#5fcc38] border-solid p-[20px] w-[380px] mt-[20px]"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter Subject"
          className="border-2 border-[#58cf37] border-solid p-[20px] w-[380px] mt-[20px]"
          required
        />
        <textarea
          type="text"
          name="message"
          cols={50}
          rows={7}
          placeholder="Leave a message"
          className="border-2 border-[#75c132] border-solid  mt-[20px] w-96"
        />
        <button
          type="submit"
          className="bg-[#646cff] p-[20px] text-[#fff] border-none font-semibold cursor-pointer w-[380px] mt-[20px]"
        >
          Send Message
        </button>
      </Form>
    </div>

              </div>  
              <iframe className="w-full h-60" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.400891269435!2d80.20161140427639!3d13.061099799745202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52671f0c65bcfb%3A0x6d7f532a255f9a7e!2sTHARAI%20TRAVELS!5e0!3m2!1sen!2sin!4v1713856005647!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}
