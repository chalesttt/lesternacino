import React from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Connect = () => {
  const contactLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "im.lester.nacino@gmail.com",
      href: "mailto:im.lester.nacino@gmail.com",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/chalesttt",
      href: "https://github.com/chalesttt",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/lesternacino",
      href: "https://www.linkedin.com/in/imlesternacino/",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook",
      value: "imlesternacino",
      href: "https://www.facebook.com/im.lester.nacino.08",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      value: "imlesternacino",
      href: "https://www.instagram.com/imlesternacino/",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      value: "+639608718175",
      href: "https://wa.me/639608718175",
    },
  ];

  return (
    <div className="opacity-0 animate-fadeIn animate-delay-600 section-container" style={{ backgroundColor: '#161616'}}>
      <h2 className="section-title text-sm sm:text-base md:text-lg lg:text-xl">Connect</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 hover:border-primary/30 transition-colors group flex items-center"
          >
            <div className="p-2 rounded-full bg-primary/10 text-primary mr-3 group-hover:bg-primary/20 transition-colors">
              {link.icon}
            </div>
            <div>
              <h3 className="text-sm sm:text-base md:text-sm sm:text-sm text-muted-foreground">{link.label}</h3>
              <p className="font-medium text-xs sm:text-sm md:text-base sm:text-sm break-words">{link.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Connect;
