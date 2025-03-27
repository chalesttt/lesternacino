
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Connect from '@/components/Connect';
import BeyondCoding from '@/components/BeyondCoding';
import Blog from '@/components/Blog';
import Recommendations from '@/components/Recommendations';
import Contact from '@/components/Contact';
import { ThemeProvider } from '@/components/ThemeProvider';

const Index = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Header />
        
        <div className="space-y-10">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <BeyondCoding />
          {/* <Blog />
          <Recommendations /> */}
          <Connect />
          <Contact />
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default Index;
