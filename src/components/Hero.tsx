
import { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Aspiring Python Developer | Future Innovator";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="relative mb-8 inline-block">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 shadow-lg shadow-blue-500/20 transition-transform duration-300 hover:scale-105">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
              <img 
                src="/profile.jpg" 
                alt="Subba Narasimha Reddy Jampana" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Floating elements around profile */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full animate-bounce delay-300"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400/20 rounded-full animate-bounce delay-700"></div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent animate-fade-in">
          Subba Narasimha Reddy
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in delay-500">
          Jampana
        </h2>

        {/* Animated Tagline */}
        <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8 animate-fade-in delay-1000">
          {displayText}
          <span className="animate-pulse">|</span>
        </div>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-1500">
          Hello! I'm a passionate and aspiring programmer currently pursuing my B.Tech in Computer Science. 
          I specialize in Python programming and have basic knowledge of HTML and CSS. Currently seeking 
          internship opportunities to grow and apply my skills in real-world projects.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-2000">
          <a href="/Subba_Narasimha_Reddy_Jampana.pdf" download>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=narasimhajampana12@gmail.com&su=Internship%20Opportunity" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me for Internship
            </Button>
          </a>
        </div>

        {/* Quick Navigation */}
        <div className="flex justify-center space-x-8 mb-16 animate-fade-in delay-2500">
          {['About Me', 'Projects', 'Contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => {
                const sectionId = item.toLowerCase().replace(' ', '').replace('me', '');
                const element = document.getElementById(sectionId === 'aboutme' ? 'about' : sectionId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-medium hover:scale-110"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="animate-bounce hover:text-blue-400 transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
