
import { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Code, GraduationCap, Briefcase, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation activeSection={activeSection} />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <Contact />
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
    </div>
  );
};

export default Index;
