import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown } from 'lucide-react';

const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const primaryExperiences = [
    {
      company: "Cristinedel Realty and Services Company",
      role: "Intern - Website Data Administrator",
      period: "2025 - Present",
    },
    {
      company: "Cavite State University - Naic Campus",
      role: "BS in Information Technology (BSIT)",
      period: "2021 - 2025",
    }
  ];

  const allExperiences = [
    ...primaryExperiences,
    {
      company: "Philippine Christian University - Dasmarinas Campus",
      role: "Information and Communication Technology (ICT)",
      period: "2018 - 2020",
    },
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
  ];

  return (
    <div className="opacity-0 animate-fadeIn animate-delay-600 section-container" style={{ backgroundColor: '#161616'}}>
      <div className="flex justify-between items-center mb-1">
        <h2 className="section-title text-sm sm:text-base md:text-lg lg:text-xl">Experience</h2>
        <div className="mb-4"> {/* Reduced margin-bottom here */}
          <Collapsible open={isExpanded}>
            <CollapsibleTrigger
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[12px] sm:text-[12px] text-primary hover:underline flex items-center"
            >
              {isExpanded ? "Show Less" : "View All"}
              <ChevronDown size={14} className={`ml-1 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
          </Collapsible>
        </div>
      </div>
      
      <div className="space-y-2"> {/* Reduced space-y value from 4 to 2 */}
        {/* Always visible experiences */}
        {primaryExperiences.map((exp, index) => (
          <div 
            key={index} 
            className="relative flex flex-col md:flex-row justify-between items-start md:items-center py-3 border-b border-border last:border-0 group hover:bg-primary/5 px-3 rounded-md transition-colors"
          >
            <div className="mb-1 md:mb-0"> {/* Reduced margin-bottom */}
              <h3 className="font-medium">{exp.role}</h3>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
          </div>
        ))}

        {/* Expandable experiences */}
        {isExpanded && allExperiences.slice(2).map((exp, index) => (
          <div 
            key={index} 
            className="relative flex flex-col md:flex-row justify-between items-start md:items-center py-3 border-b border-border last:border-0 group hover:bg-primary/5 px-3 rounded-md transition-colors"
          >
            <div className="mb-1 md:mb-0"> {/* Reduced margin-bottom */}
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
