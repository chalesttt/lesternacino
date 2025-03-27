import { useState } from 'react';
import Tag from './Tag';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const primaryProjects = [
    {
      title: "TaskMaster: To-Do-List App",
      description: "A to-do list app is a digital tool designed to help users organize and manage their tasks and reminders.",
      technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
      demo: "https://lesternacino-todolist.netlify.app/"
    },
    {
      title: "SecurePasss: Password Generator",
      description: "A Password Generator is a tool or application that creates strong, random passwords to enhance security.",
      technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
      demo: "https://lesterncino-passwordgenerator.netlify.app/"
    },
    {
      title: "QR Code Generator",
      description: "A QR code, short for Quick Response code, is an array of black and white squares or pixels set in a grid that stores data for a machine to read.",
      technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
      demo: "https://lesternacino-qrcodegenerator.netlify.app/"
    },
    {
      title: "vCard Generator",
      description: "vCard generator is a powerful, free, tool that makes it easy to create virtual business cards in the vCard format.",
      technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
      demo: "https://lesternacino-vcardgenerator.netlify.app/"
    }
  ];

  const allProjects = [
    ...primaryProjects,
    // {
    //   title: "Personal Blog",
    //   description: "A statically generated blog built with modern web technologies featuring dark mode and code syntax highlighting.",
    //   technologies: ["Next.js", "MDX", "Tailwind CSS"],
    //   demo: "https://example.com"
    // },
    // {
    //   title: "AI Image Generator",
    //   description: "An application that uses machine learning to generate unique images based on text prompts.",
    //   technologies: ["React", "Python", "TensorFlow", "Flask"],
    //   demo: "https://example.com"
    // },
    // {
    //   title: "Financial Dashboard",
    //   description: "Interactive dashboard for tracking investments, expenses, and financial goals with data visualization.",
    //   technologies: ["Vue.js", "D3.js", "Firebase"],
    //   demo: "https://example.com"
    // }
  ];

  return (
    <div className="opacity-0 animate-fadeIn animate-delay-600 section-container p-4 md:p-8" style={{ backgroundColor: '#161616'}}>
      <div className="flex justify-between items-center mb-1">
        <h2 className="section-title text-sm sm:text-base md:text-lg lg:text-xl">Recent Projects</h2>
        <div className="mb-7">
        <Collapsible open={isExpanded}>
          <CollapsibleTrigger
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[12px] text-sm sm:text-base text-primary hover:underline flex items-center"     
          >
            {isExpanded ? "Show Less" : "View All"}
            <ChevronDown size={16} className={`ml-1 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
        </Collapsible>
        </div>
      </div>
      
      <Collapsible open={isExpanded} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {primaryProjects.map((project, index) => (
            <div key={index} className="glass-card p-5">
              <h3 className="text-lg font-medium mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-3 text-sm">{project.description}</p>
              
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech, i) => (
                  <Tag key={i} className="text-xs">{tech}</Tag>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <CollapsibleContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {allProjects.slice(4).map((project, index) => (
              <div key={index} className="glass-card p-5">
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-3 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, i) => (
                    <Tag key={i} className="text-xs">{tech}</Tag>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Projects;
