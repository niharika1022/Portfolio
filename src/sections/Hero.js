'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Full Stack Developer & Creative Problem Solver";
  const heroRef = useRef(null);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-900 via-orange-900 to-amber-900 dark:from-gray-900 dark:via-orange-900 dark:to-amber-900 pt-16 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse animate-bounce-custom"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-amber-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse animate-bounce-custom" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse animate-bounce-custom" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-column layout: Left for content, Right for image */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column - Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent animate-pulse-custom">
                Niharika
              </span>
            </h1>
            
            {/* Typing Animation Container */}
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 min-h-[4rem] flex items-center justify-center lg:justify-start">
                <span className="font-mono bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700/30">
                {displayText}
                <span className={`inline-block w-1 h-6 bg-orange-400 ml-1 ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
              </span>
            </div>

            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about crafting exceptional digital experiences with modern technologies. 
              I transform creative ideas into scalable, user-friendly applications that make an impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group relative bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
              
              <button
                onClick={() => scrollToSection('#contact')}
                className="group relative border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-orange-400 hover:text-white overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-orange-400 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-down">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-orange-500 via-amber-600 to-yellow-600 p-2 shadow-2xl hover:scale-105 transition-transform duration-300 group overflow-hidden">
              <div className="w-full h-full rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center relative">
                {/* Profile Image Placeholder - Replace with your image */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-5xl text-white opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {/* Profile Image */}
                  <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                     <Image
                          src="/my_image/profil.jpg"
                          alt="Profile"
                          width={320}
                          height={320}
                          className="w-full h-full object-cover"
                          />
                  </div>

                  </span>
                </div>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-amber-600/20 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-orange-400/50 rounded-full flex justify-center group cursor-pointer hover:border-orange-400 transition-colors duration-300">
            <div className="w-1 h-4 bg-orange-400 mt-2 animate-pulse group-hover:bg-white transition-colors duration-300"></div>
          </div>
          <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll to explore
          </p>
        </div>
      </div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}
