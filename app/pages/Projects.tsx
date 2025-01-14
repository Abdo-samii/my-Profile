  "use client";

  import Image from 'next/image';
  import img1 from '../public/images/pr1.png';
  import img2 from '../public/images/pr2.png';
  import { RiCodeBoxFill } from "react-icons/ri";
  export default function Projects() {


    return (
      <div id='projects' className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-purple-800/50 via-indigo-900/50 to-purple-800/50 text-white px-4">
        <h1 className="text-4xl text-center pt-4">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto my-12 max-w-6xl">
          {/* المشروع الأول */}
          <div className="relative group">
            <Image
              src={img1}
              alt="Project 1"
              className="rounded-2xl w-full h-auto transition-opacity duration-300 group-hover:opacity-40"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-600/50 rounded-2xl">
              <div className="flex space-x-8 mb-4">
                
                {/* أيقونة الكود */}
                <div
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => window.open('https://github.com/Abdo-samii/Eslab-coffee', '_blank')}
                >
                  <span className="text-white text-4xl"><RiCodeBoxFill /></span>
                </div>
              </div>
              <p className="text-white text-lg font-bold">Cafe Es</p>
            </div>
          </div>

          {/* المشروع الثاني */}
          <div className="relative group">
            <Image
              src={img2}
              alt="Project 2"
              className="rounded-2xl w-full h-auto transition-opacity duration-300 group-hover:opacity-40"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-600/50 rounded-2xl">
              <div className="flex space-x-8 mb-4">
                <div
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => window.open('https://github.com/Abdo-samii/corces.mern', '_blank')}
                >
                  <span className="text-white text-4xl"><RiCodeBoxFill /></span>
                </div>
              </div>
              <p className="text-white text-lg font-bold">Sansa</p>
            </div>
          </div>
        </div>
        <span className='w-full lg:w-[80%] rounded-full h-1 bg-black mt-12'></span>
      </div>
    );
  }
