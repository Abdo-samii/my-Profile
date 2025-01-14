"use client";
import { useState } from 'react';
import Image from 'next/image';
import img from '../public/images/3d-portrait-people.jpg';

export default function About() {
  const [text, setText] = useState(
    'Since I started in web development, I have become obsessed with turning ideas into websites and web applications that work efficiently and look great. I work using a variety of tools and technologies such as HTML, CSS, JavaScript, and React to design and develop interactive user interfaces, along with back-end systems development using Node.js and PHP to provide flexible and scalable solutions.'
  );

  return (
    <div id='about' className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-purple-800/50 via-indigo-900/50 to-purple-800/50 text-white px-4">
      <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 w-full max-w-6xl">
        {/* الصورة */}
        <div className="flex-shrink-0 h-auto w-full lg:w-1/2">
          <Image
           src={img}
            alt="Skills Image" 
            className="h-full  rounded-lg  transition-shadow duration-300 ease-in-out shadow-xl hover:shadow-black/30" />
        </div>
        {/* النص */}
        <div className="flex-grow overflow-y-auto">
          <h1 className="text-4xl font-bold mb-6 text-center lg:text-left">About Me:</h1>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 mb-6">
            {/* الأزرار */}
            <button
              className="text-xl text-black underline hover:underline hover:text-purple-600 hover:-translate-y-2 transition-transform duration-300"
              onClick={() =>
                setText(
                  'Since I started in web development, I have become obsessed with turning ideas into websites and web applications that work efficiently and look great. I work using a variety of tools and technologies such as HTML, CSS, JavaScript, and React to design and develop interactive user interfaces, along with back-end systems development using Node.js and PHP to provide flexible and scalable solutions.'
                )
              }
            >
              Start 
            </button>
            <button
              className="text-xl text-black underline hover:underline hover:text-purple-600 hover:-translate-y-2 transition-transform duration-300"
              onClick={() =>
                setText(
                  'In our rapidly evolving digital world, I see web development as a real opportunity to make a difference. I love working on projects that improve people`s lives and contribute to innovative solutions to everyday problems. Turning an idea into a tangible product, testing performance, and improving the user experience are moments that I consider part of the pleasure of working.'
                )
              }
            >
              Why web development?
            </button>
            <button
              className="text-xl text-black underline hover:underline hover:text-purple-600 hover:-translate-y-2 transition-transform duration-300"
              onClick={() =>
                setText(
                  'Innovation: I am always looking for new and innovative ways to improve technical solutions. Attention to detail: I believe that small details make the difference.'
                )
              }
            >
              Values I believe in
            </button>
          </div>
          {/* النص المتغير */}
          <p className="text-lg font-semibold leading-8">{text}</p>
        </div>
      </div>
      <span className='w-full lg:w-[80%]  rounded-full h-1 bg-black mt-36'></span>
    </div>
  );
}
