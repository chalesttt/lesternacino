import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialIconsProps {
  className?: string;
}

const SocialIcons = ({ className }: SocialIconsProps) => {
  return (
    <div className={cn("flex flex-wrap items-center gap-2 sm:gap-4", className)}>
      <a href="https://github.com/chalesttt" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
        <Github size={18} />
      </a>
      <a href="https://www.linkedin.com/in/imlesternacino/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
        <Linkedin size={18} />
      </a>
      <a href="mailto:im.lester.nacino@gmail.com" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
        <Mail size={18} />
      </a>
      <a href="https://www.facebook.com/im.lester.nacino.08" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
        <Facebook size={18} />
      </a>
      <a href="https://www.instagram.com/imlesternacino/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
        <Instagram size={18} />
      </a>
      <a href="https://wa.me/639608718175" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
        <MessageCircle size={18} />
      </a>
    </div>
  );
};

export default SocialIcons;
