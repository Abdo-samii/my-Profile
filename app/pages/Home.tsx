"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import img from "../public/images/home1.png";
import { FaInstagram, FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
export default function Home() {

  return (
    <>
      <div className="flex flex-wrap justify-between h-screen">
        <div className="text-white md:flex bg-gradient-to-t from-purple-800/50 via-indigo-900/50 to-purple-800/50 items-center w-full h-full">
          <motion.div
            className="relative z-10 mx-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={img}
              alt="Home Image"
              className="sm:h-[580px] sm:hidden md:h-[600px] w-[600px]"
              priority
            />
            <h1 className="text-purple-800 mb-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold">
              <span className="text-white">Hello, I&apos;m </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Abdo",
                  1000,
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </h1>
            <p className="text-lg mt-4 font-light">
              A web developer specializing in designing and developing websites using
              the latest technology and best practices.
              I have a passion for turning ideas into a digital reality, creating dynamic and responsive websites
              that meet customer needs and enhance the user experience.
            </p>
            <div className="text-3xl flex justify-start space-x-4 items-center mt-4">
              <Link
                href="#contact"
                className=" rounded-2xl px-4 py-2 bg-gradient-to-t from-purple-800  to-indigo-800 hover:from-indigo-800 hover:-translate-y-2 hover:to-purple-800 text-white"
              >
                Contact
              </Link>
             <div onClick={() => window.open('https://www.instagram.com/abdo_samii1?igsh=cDdvZWQ1dzZiZm90', '_blank')}> <FaInstagram className="hover:text-purple-700 hover:-translate-y-2" aria-label="Instagram" /></div>
             <div onClick={() => window.open('https://www.linkedin.com/in/abdelrahman-samii-0516b9297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}><FaLinkedinIn className="hover:text-purple-700 hover:-translate-y-2" aria-label="LinkedIn" /></div> 
             <div onClick={() => window.open('https://github.com/Abdo-samii', '_blank')}><FaGithub  className="hover:text-purple-700 hover:-translate-y-2" aria-label="LinkedIn" /></div> 

            </div>
          </motion.div>

          <Image
            src={img}
            alt="Home Image"
            className="sm:h-[580px]  hidden md:block md:h-[600px] w-[600px]"
            priority
          />
        </div>
      </div>
      <div className="bg-gradient-to-t from-purple-800/50 via-indigo-900/50 to-purple-800/50">
        <h1 className="text-4xl text-center pt-4 font-bold text-slate-200">Skills</h1>
        <div className="flex flex-wrap justify-around ">
          <div className="mb-8">
            <div className="relative mb-6">
              <h1 className="w-96 p-5 uppercase bg-gray-900 rounded-t-3xl  text-slate-200 text-[20px] font-bold">HTML</h1>
              <span className="bg-gray-700 w-[67%] h-[4px] absolute bottom-0"></span>
            </div>
            <div className="relative mb-6">
              <h1 className="w-96 p-5 uppercase bg-gray-900 rounded-t-3xl text-slate-200 text-[20px] font-bold">JS</h1>
              <span className="bg-gray-700 w-[88%] h-[6px] absolute bottom-0"></span>
            </div>
          </div>
          <div className="mb-8">
            <div className="relative mb-6">
              <h1 className="w-96 p-5 uppercase rounded-t-3xl bg-gray-900 text-slate-200 text-[20px] font-bold">React</h1>
              <span className="bg-gray-700 w-[90%] h-[6px] absolute bottom-0"></span>
            </div>
            <div className="relative mb-6">
              <h1 className="w-96 p-5 uppercase bg-gray-900 rounded-t-3xl text-slate-200 text-[20px] font-bold">Next. js</h1>
              <span className="bg-gray-700 w-[80%] h-[6px] absolute bottom-0"></span>
            </div>
          </div>
        </div></div>
    </>
  );
}
