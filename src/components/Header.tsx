import React from 'react';
import SocialIcons from './SocialIcons';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <div className="relative opacity-0 animate-fadeIn section-container mb-10" style={{ backgroundColor: '#161616'}}>
      {/* <div className="absolute top-3 right-3">
        <ThemeToggle />
      </div> */}
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-border">
          <img 
            src="https://lester-nacino.netlify.app/img/download.jpg" 
            alt="Profile Picture" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">John Lester Lerog Nacino</h1>
          <p className="text-muted-foreground text-base md:text-lg mb-3">Web Developer | CyberSecurity</p>
          
          <div className="flex justify-center md:justify-start flex-wrap gap-2">
            <a download href="public/John_Lester_L._Nacino_Resume.pdf">
              <Button variant="outline" size="sm" className="hover:bg-primary/10 transition-colors">
                <Download size={16} className="mr-2" />
                Download Resume`
              </Button>
            </a>
          </div>
        </div>
        
        <SocialIcons className="self-center md:self-end" />
      </div>
    </div>
  );
};

export default Header;
