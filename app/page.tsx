"use client";
import About from "./pages/About";
import Contact from "./pages/Contact"; // إزالة الفراغ الزائد
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Nev from "./pages/Nev";
import Projects from "./pages/Projects";
import React, { useState, useEffect } from "react"; // لاستعمال صفحة تحميل

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 100); // محاكاة تأخير لمدة 2 ثانية
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="audiowide-regular">
      <Nev />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
