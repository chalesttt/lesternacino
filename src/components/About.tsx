import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set component to visible after mounting for animations to trigger
    setIsVisible(true);
  }, []);
  
  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} section-container`} style={{ backgroundColor: '#161616'}}>
      <h2 className="section-title text-sm sm:text-base md:text-lg lg:text-xl transform transition-transform duration-700 ease-out hover:scale-105">
        About
      </h2>
      
      <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
        <p className="transform transition-all duration-1000 delay-300 translate-y-0 opacity-100">
          Technology has always fascinated me, especially in softwimport React from 'react';

const About = () => {
  return (
    <div className="opacity-0 animate-fadeIn animate-delay-600 section-container" style={{ backgroundColor: '#161616'}}>
      <h2 className="section-title text-sm sm:text-base md:text-lg lg:text-xl">About</h2>
      
      <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
        <p>
          Technology has always fascinated me, especially in software development, system analysis,
          and cybersecurity. I love solving complex problems and making tech more intuitive, secure, and 
          useful for people. Learning never stops for me, I’m always exploring new skills, certifications, and 
          projects to stay ahead.
        </p>
        
        <p>
        Beyond work, I enjoy collaborating, sharing knowledge, and contributing to open-source projects. 
        I’m passionate about self-improvement and constantly pushing myself to grow. At the end of the day, 
        my goal is simple: keep innovating and use technology to make life better.
        </p>
      </div>
    </div>
  );
};

export default About;are development, system analysis,
          and cybersecurity. I love solving complex problems and making tech more intuitive, secure, and 
          useful for people. Learning never stops for me, I'm always exploring new skills, certifications, and 
          projects to stay ahead.
        </p>
        
        <p className="transform transition-all duration-1000 delay-700 translate-y-0 opacity-100">
          Beyond work, I enjoy collaborating, sharing knowledge, and contributing to open-source projects. 
          I'm passionate about self-improvement and constantly pushing myself to grow. At the end of the day, 
          my goal is simple: keep innovating and use technology to make life better.
        </p>
      </div>
    </div>
  );
};

export default About;
