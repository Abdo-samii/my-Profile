"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nev() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray-900">
        <div>
          <Link href="/" className="text-2xl font-extrabold text-white">Abdo</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`md:flex space-x-6 hidden ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="#about" className="text-xl font-bold hover:text-[#6D2A89] hover:underline text-white">About</Link>
          <Link href="#projects" className="text-xl font-bold hover:text-[#6D2A89] hover:underline text-white">Projects</Link>
          <Link href="#contact" className="text-xl font-bold hover:text-[#6D2A89] hover:underline text-white">Contact</Link>
        </div>
      </div>

      {/* قائمة منسدلة للشاشات الصغيرة */}
      {isOpen && (
        <div className="md:hidden bg-[#232222] space-y-4 p-4">
          <Link href="#about" className="block text-xl font-bold text-white hover:text-[#6D2A89] hover:underline">About</Link>
          <Link href="#projects" className="block text-xl font-bold text-white hover:text-[#6D2A89] hover:underline">Projects</Link>
          <Link href="#contact" className="block text-xl font-bold text-white hover:text-[#6D2A89] hover:underline">Contact</Link>
        </div>
      )}
    </>
  );
}
