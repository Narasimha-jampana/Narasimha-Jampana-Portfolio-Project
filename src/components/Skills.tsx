
import { useState, useEffect, useRef } from 'react';
import { Code2, Palette, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillBarProps {
  skill: string;
  level: number;
  color: string;
  icon: React.ReactNode;
  delay: number;
}

const SkillBar = ({ skill, level, color, icon, delay }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimatedLevel(level);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={barRef} className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${color}`}>
            {icon}
          </div>
          <span className="text-lg font-semibold text-white">{skill}</span>
        </div>
        
      </div>
      
      <div className="relative">
        {/* Background bar */}
        <div className="w-full h-4 bg-slate-700/50 rounded-full overflow-hidden shadow-inner">
          {/* Progress bar */}
          <div 
            className={`h-full rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
            style={{ 
              width: `${animatedLevel}%`,
              background: `linear-gradient(90deg, ${color.includes('blue') ? '#3B82F6, #06B6D4' : color.includes('orange') ? '#F97316, #EF4444' : '#06B6D4, #8B5CF6'})`
            }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        {/* Floating indicator */}
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      skill: "Python Programming",
      level: 85,
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      icon: <Code2 className="h-5 w-5 text-white" />,
      delay: 200
    },
    {
      skill: "Fullstack With AI",
      level: 75,
      color: "bg-gradient-to-r from-purple-500 to-violet-500",
      icon: <Globe className="h-5 w-5 text-white" />,
      delay: 400
    },
    {
      skill: "Python with DSA",
      level: 80,
      color: "bg-gradient-to-r from-cyan-500 to-purple-500",
      icon: <Code2 className="h-5 w-5 text-white" />,
      delay: 600
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Here's a breakdown of my technical skills and proficiency levels
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div>
            <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technical Proficiency</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="text-lg font-semibold text-white">{skill.skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Description */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <Code2 className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-400">Python Programming</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  My primary programming language. I've built various projects including bill generation systems, 
                  eligibility checkers, and more. Comfortable with core Python concepts and libraries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mr-3">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-purple-400">Fullstack With AI</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Building end-to-end applications leveraging AI tools and frameworks.
                  Combining frontend and backend skills with AI-powered development.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <Code2 className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-cyan-400">Python with DSA</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Strong foundation in Data Structures and Algorithms using Python.
                  Problem-solving skills with efficient algorithmic approaches.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Learning Goals */}
        <Card className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg border-slate-600/50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 font-medium">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 rounded-full text-purple-400 font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-400 font-medium">
                Data Structures
              </span>
            </div>
            <p className="text-gray-400 mt-4">
              Always expanding my skill set to stay current with technology trends
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
