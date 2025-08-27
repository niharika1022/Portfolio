'use client';

import { useEffect, useRef, useState } from 'react';

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Next.js', level: 70, color: 'from-black to-gray-800' },
        { name: 'JavaScript', level: 82, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Tailwind CSS', level: 65, color: 'from-cyan-400 to-cyan-600' },
        { name: 'HTML/CSS', level: 96, color: 'from-orange-500 to-orange-600' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, color: 'from-green-500 to-green-600' },
        { name: 'Express', level: 85, color: 'from-gray-600 to-gray-800' },
        { name: 'MongoDB', level: 70, color: 'from-green-600 to-green-800' },
        
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 92, color: 'from-orange-600 to-orange-700' },
        { name: 'Figma', level: 80, color: 'from-purple-400 to-purple-600' },
        
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-orange-50 dark:bg-gray-800 relative overflow-hidden">
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
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to create amazing digital experiences
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                    <span className="text-orange-600 dark:text-orange-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Always learning and expanding my skill set
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
