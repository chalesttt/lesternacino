import React, { useState } from 'react';
import Tag from './Tag';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown } from 'lucide-react';

const Skills = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const primarySkillSets = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "PHP", "Python"]
    }
  ];

  const allSkillSets = [
    ...primarySkillSets,
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code"]
    },
    {
      category: "CMS & No-Code",
      skills: ["WordPress", "Webflow", "Shopify", "Contentful", "Strapi"]
    },
    {
      category: "Security & Identity",
      skills: ["OAuth", "JWT", "Auth0", "Firebase Auth", "AWS Cognito"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Hugging Face", "OpenAI API", "Langchain"]
    }
  ];

  return (
    <div className="opacity-0 animate-fadeIn animate-delay-600 section-container" style={{ backgroundColor: '#161616'}}>
      <div className="flex justify-between items-center mb-1">
        <h2 className="section-title text-sm sm:text-base md:text-lg lg:text-xl">Tech Stack</h2>
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
      
      <Collapsible open={isExpanded} className="space-y-6">
        {/* Always visible skill sets */}
        {primarySkillSets.map((skillSet, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="text-lg font-medium mb-3 border-b border-#161616">{skillSet.category}</h3>
            <div className="flex flex-wrap">
              {skillSet.skills.map((skill, i) => (
                <Tag key={i} className="m-1">{skill}</Tag>
              ))}
            </div>
          </div>
        ))}

        {/* Expandable skill sets */}
        <CollapsibleContent className="space-y-6 pt-4">
          {allSkillSets.slice(2).map((skillSet, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h3 className="text-lg font-medium mb-3 border-b border-#161616">{skillSet.category}</h3>
              <div className="flex flex-wrap">
                {skillSet.skills.map((skill, i) => (
                  <Tag key={i} className="m-1">{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Skills;
