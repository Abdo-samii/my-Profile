import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-t from-purple-800/50 via-indigo-900/50 to-purple-800/50 text-white">
      <span className="w-[80%] max-w-lg mx-auto rounded-full h-1 bg-black mt-8"></span>
      <div className="flex flex-wrap justify-between items-center w-full max-w-lg mt-4 space-y-4 sm:space-y-0">
        <Link href="/" className="text-2xl hover:text-purple-400 transition">
          Abdo
        </Link>
        <p className="text-xl font-semibold text-center sm:text-right">
          All rights reserved
        </p>
      </div>
    </div>
  );
}
