import React, { useState } from 'react';

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      company: "Cristinedel Realty and Services Company",
      role: "Intern - Website Data Administrator",
      period: "2025 - Present",
    },
    {
      company: "Cavite State University - Naic Campus",
      role: "BS in Information Technology (BSIT)",
      period: "2021 - 2025",
    },
    {
      company: "Philippine Christian University - Dasmarinas Campus",
      role: "Information and Communication Technology (ICT)",
      period: "2018 - 2020",
    },
    ...(showAll ? [
      {
        company: "Freelance",
        role: "Web Developer",
        period: "2016 - 2017",
      },
      {
        company: "StartupX",
        role: "Junior Developer",
        period: "2015 - 2016",
      },
      {
        company: "CodeLab",
        role: "Intern",
        period: "2014 - 2015",
      }
    ] : [])
  ];

  return (
    <div className="opacity-0 animate-fadeIn animate-delay-600 section-container" style={{ backgroundColor: '#161616'}}>
      <div className="flex justify-between items-center">
        <h2 className="section-title text-sm sm:text-base md:text-lg lg:text-xl">Experience</h2>
        {!showAll && experiences.length > 3 && (
          <button 
            onClick={() => setShowAll(true)}
            className="text-sm text-primary hover:underline"
          >
            View All
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="relative flex flex-col md:flex-row justify-between items-start md:items-center py-3 border-b border-border last:border-0 group hover:bg-primary/5 px-3 rounded-md transition-colors"
          >
            <div className="mb-2 md:mb-0">
              <h3 className="font-medium">{exp.role}</h3>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
