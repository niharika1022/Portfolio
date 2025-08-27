'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '1', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Available' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-orange-50 dark:bg-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-300 rounded-full mix-blend-soft-light filter blur-xl animate-pulse animate-bounce-custom"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-amber-300 rounded-full mix-blend-soft-light filter blur-xl animate-pulse animate-bounce-custom" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-xl animate-pulse animate-bounce-custom" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm a dedicated full-stack developer with a passion for creating innovative 
                web solutions. With expertise in modern technologies like React, Next.js, 
                and Node.js, I bring ideas to life with clean, efficient code.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                My approach combines technical excellence with creative problem-solving. 
                I believe in writing maintainable code, focusing on user experience, and 
                continuously learning new technologies to stay ahead in the ever-evolving 
                tech landscape.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Skills Preview */}
            <div className="space-y-6">
              {[
                { skill: 'Frontend Development', level: 90 },
                { skill: 'Backend Development', level: 70 },
                { skill: 'UI/UX Design', level: 75 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {item.skill}
                    </span>
                    <span className="text-orange-600 dark:text-orange-400 font-semibold">
                      {item.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                      className="bg-gradient-to-r from-orange-500 to-amber-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${item.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
