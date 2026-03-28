import { ExternalLink, Github, ShoppingCart, Bot, Code2, Activity, Citrus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: React.ReactNode;
  gradient: string;
  delay: number;
  codeUrl?: string;
  demoUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  features,
  technologies,
  icon,
  gradient,
  delay,
  codeUrl,
  demoUrl
}: ProjectCardProps) => {
  const handleCodeClick = () => {
    if (codeUrl) {
      window.open(codeUrl, '_blank');
    } else {
      alert('Code repository will be available soon!');
    }
  };

  const handleDemoClick = () => {
    if (demoUrl) {
      window.open(demoUrl, '_blank');
    } else {
      alert('Live demo will be available soon!');
    }
  };

  return (
    <Card className={`group bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in`} style={{
      animationDelay: `${delay}ms`
    }}>
      <CardContent className="p-8">
        {/* Project Icon */}
        <div className={`w-16 h-16 ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Key Features</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => <li key={index} className="flex items-center text-gray-300 text-sm">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                {feature}
              </li>)}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => <span key={index} className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20">
                {tech}
              </span>)}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleCodeClick}
            className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleDemoClick}
            className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  // Version: 1.0.5 - Forcing hash update
  const projects = [
    {
      title: "B-Mart Supermarket App",
      description: "A premium, mobile-first supermarket web app for B-Mart featuring modern design, smart product filtering, and a seamless WhatsApp-based ordering system.",
      features: ["Smart product filtering", "WhatsApp ordering", "Mobile-first design", "Inventory tracking", "Real-time stock updates"],
      technologies: ["React", "Firebase", "Tailwind CSS", "WhatsApp API"],
      icon: <ShoppingCart className="h-8 w-8 text-white" />,
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
      delay: 200,
      codeUrl: "https://github.com/Narasimha-jampana/B-Mart-supermart-",
      demoUrl: "https://bmart-supermarket-app-9214a.web.app"
    },
    {
      title: "Kali AI Assistant",
      description: "An intelligent conversational agent designed to provide instant support and accurate information using advanced natural language processing.",
      features: ["Instant responses", "NLP processing", "Context awareness", "Multilingual support", "API integration"],
      technologies: ["Python", "OpenAI", "React", "Flask"],
      icon: <Bot className="h-8 w-8 text-white" />, 
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
      delay: 400,
      codeUrl: "https://github.com/Narasimha-jampana/Kali-Ai-Ai-chartbot-project-",
      demoUrl: "https://kali-ai-nj.web.app"
    },
    {
      title: "Code Conveter: Make Logic, Not Language",
      description: "A powerful developer utility that translates code snippets between different programming languages accurately while maintaining syntax integrity.",
      features: ["Multi-language support", "Syntax highlighting", "Real-time conversion", "Code optimization", "User-friendly interface"],
      technologies: ["JavaScript", "React", "PrismJS", "Node.js"],
      icon: <Code2 className="h-8 w-8 text-white" />,
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      delay: 600,
      codeUrl: "https://github.com/Narasimha-jampana/Code-Conveter-Make-Logic-Not-Language-",
      demoUrl: "https://code-converter-nj.web.app"
    },
    {
      title: "SLP Doctor - Voice Therapy",
      description: "A specialized health-tech application for Speech-Language Pathologists to assist with voice frequency analysis and therapy progress tracking.",
      features: ["Voice analysis", "Progress tracking", "Therapy modules", "Audio recording", "Report generation"],
      technologies: ["React", "Web Audio API", "Firebase", "Chart.js"],
      icon: <Activity className="h-8 w-8 text-white" />,
      gradient: "bg-gradient-to-br from-orange-500 to-rose-600",
      delay: 800,
      codeUrl: "https://github.com/Narasimha-jampana/SNL-Webpage",
      demoUrl: "https://snl-voice.web.app"
    },
    {
      title: "Fresh Juice Showcase",
      description: "A vibrant, premium product showcase for a fresh juice brand, featuring smooth landing page transitions and interactive flavor profiles.",
      features: ["Dynamic flavor selection", "Premium animations", "Interactive product cards", "Mobile-responsive showcase", "Modern aesthetic"],
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      icon: <Citrus className="h-8 w-8 text-white" />,
      gradient: "bg-gradient-to-br from-yellow-400 to-orange-500",
      delay: 1000,
      codeUrl: "https://github.com/Narasimha-jampana/Fresh-Juice",
      demoUrl: "https://fresh-juice-showcase-premium.web.app"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <span className="hidden">v1.0.7</span>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Here are some of the projects I've built to demonstrate my programming skills and problem-solving abilities
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
      </div>

      {/* Future Projects Section */}
      <Card className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 backdrop-blur-lg border-slate-600/50 max-w-4xl mx-auto">
        <CardContent className="p-8 text-center bg-sky-800 mx-0 my-0 px-[32px] rounded-none">
          <h3 className="text-2xl font-semibold text-white mb-4">More Projects Coming Soon</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm continuously working on new projects to expand my portfolio and explore different 
            technologies. Stay tuned for web applications, data analysis projects, and more innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full text-amber-400 font-medium">
              Web Development
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-full text-green-400 font-medium">
              Data Analysis
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 rounded-full text-rose-400 font-medium">
              GUI Applications
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;
