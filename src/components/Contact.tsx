import React from 'react';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="opacity-0 animate-fadeIn animate-delay-600 section-container" style={{ backgroundColor: '#161616'}}>
      <h2 className="section-title text-sm sm:text-base md:text-lg lg:text-xl">Get in Touch</h2>
      
      <div className="glass-card p-6">
        <form 
          className="space-y-4" 
          action="https://formspree.io/f/mnnpnwvo" 
          method="POST"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-sm"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-sm"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
            <textarea
              required
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary resize-y text-sm"
              placeholder="Your message..."
            ></textarea>
          </div>
          
<Button
  type="submit"
  className="w-full bg-black text-white hover:bg-primary/10 transition-colors duration-300"
>
  <Send size={16} className="mr-2" /> 
  Send Message
</Button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
