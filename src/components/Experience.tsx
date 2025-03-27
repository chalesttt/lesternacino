import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Cristinedel Realty and  Services Company",
      role: "Intern",
      period: "2025 - Present",
    },
    {
      company: "Cavite State Universitry",
      role: "BS in information Technology",
      period: "2021 - 2025",
    },
    // {
    //   company: "DigitalCreative Agency",
    //   role: "Web Developer",
    //   period: "2017 - 2019",
    // },
    // {
    //   company: "Freelance",
    //   role: "Web Developer",
    //   period: "2016 - 2017",
    // },
    // {
    //   company: "StartupX",
    //   role: "Junior Developer",
    //   period: "2015 - 2016",
    // },
    // {
    //   company: "CodeLab",
    //   role: "Intern",
    //   period: "2014 - 2015",
    // }
  ];

  return (
    <div className="opacity-0 animate-fadeIn animate-delay-600 section-container" style={{ backgroundColor: '#161616'}}>
      <h2 className="section-title text-sm sm:text-base md:text-lg lg:text-xl">Experience</h2>
      
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
