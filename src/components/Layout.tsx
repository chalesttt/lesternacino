import React, { useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Separator } from './ui/separator';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.opacity-0').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.opacity-0').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen text-foreground bg-background transition-colors duration-300 flex justify-center items-center">
      <div 
        className="container mx-auto px-4 py-6 md:py-10 transition-all duration-300 ease-in-out max-w-4xl"
      >
        {children}
        
        <Separator className="my-6" />
        
        <footer className="py-2 text-center text-muted-foreground text-sm">
          <p>© 2025 Lester Nacino. All rights reserved.</p>
        </footer>
        
{/*         <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button> */}
        
<iframe
  width="100%"
  height="800px"
  frameborder="0"
  src="https://denser.ai/u/embed/64d281c9-5134-4cf8-a62e-c6531d613eae">
</iframe>
  
      </div>
    </div>
  );
};

export default Layout;
