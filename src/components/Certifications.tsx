import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const Certifications = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const primaryCertifications = [
    {
      title: "Career Boost with Power BI",
      issuer: "Exodos Experts",
      date: " February 2025",
      link: "https://shorturl.at/vU0AJ"
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      date: "February 2025",
      link: "https://shorturl.at/8wvA9"
    },
    {
      title: "Intro to Prompt Engineering",
      issuer: "Simpli Learn",
      date: "February 2022",
      link: "https://shorturl.at/m1PsJ"
    }
  ];

  const allCertifications = [
    ...primaryCertifications,
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "January 2025",
      link: "https://shorturl.at/ukmIN"
    },
    {
      title: "JavaScript Essentials 2",
      issuer: "Cisco Networking Academy",
      date: "January 2025",
      link: "https://shorturl.at/SOa2B"
    },
    {
      title: "Network Security",
      issuer: "The Open Learn",
      date: "December 2024",
      link: "https://tinyurl.com/bdd57njx"
    },
    {
      title: "Ethical Hacker",
      issuer: "Cisco Networking Academy",
      date: "November 2024",
      link: "https://tinyurl.com/566u2jun"
    },
    {
      title: "Endpoint Security",
      issuer: "Cisco Networking Academy",
      date: "November 2024",
      link: "https://tinyurl.com/5fjj6j3h"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "October 2024",
      link: "https://shorturl.at/NIArx"
    }

  ];

  return (
    <div className="opacity-0 animate-fadeIn animate-delay-600 section-container" style={{ backgroundColor: '#161616'}}>
      <div className="flex justify-between items-center mb-1">
        <h2 className="section-title text-sm sm:text-base md:text-lg lg:text-xl">Recent Certifications</h2>
        <div className="mb-7">
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

      <Collapsible open={isExpanded} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Always visible certifications */}
          {primaryCertifications.map((cert, index) => (
            <a 
              key={index} 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 hover:border-primary/30 transition-colors flex flex-col"
            >
              <div className="flex items-center mb-2">
                <Award size={16} className="text-primary mr-2" />
                <h3 className="text-sm sm:text-base font-medium">{cert.title}</h3>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-auto italic">
                <p>{cert.issuer}</p>
                <p>{cert.date}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Expandable certifications */}
        <CollapsibleContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
            {allCertifications.slice(3).map((cert, index) => (
              <a 
                key={index} 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 hover:border-primary/30 transition-colors flex flex-col"
              >
                <div className="flex items-center mb-2">
                  <Award size={16} className="text-primary mr-2" />
                  <h3 className="text-sm sm:text-base font-medium">{cert.title}</h3>
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-auto italic">
                  <p>{cert.issuer}</p>
                  <p>{cert.date}</p>
                </div>
              </a>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Certifications;
