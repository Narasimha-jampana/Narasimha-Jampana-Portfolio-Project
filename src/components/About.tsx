
import { GraduationCap, Code, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Personal Bio */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 overflow-hidden border border-blue-400/30">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Personal Story</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              As a dedicated Computer Science student, I'm passionate about solving problems through code.
              My journey began with curiosity about how software works, and it has evolved into a deep
              appreciation for programming and technology.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in continuous learning and am always eager to take on new challenges that help
              me grow as a developer. My goal is to contribute meaningfully to projects while expanding
              my technical expertise.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-2">
                  B.Tech in Computer Science
                </h4>
                <p className="text-gray-300 mb-1">Currently Pursuing</p>
                <p className="text-gray-400 text-sm">
                  Expanding my knowledge in advanced programming concepts, algorithms, and software development methodologies.
                </p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                  Diploma in Computer Science
                </h4>
                <p className="text-gray-300 mb-1">2022 - 2025</p>
                <p className="text-gray-400 text-sm">
                  Built foundational knowledge in programming, computer systems, and software development.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skills Preview */}
      <div className="mt-16 text-center">
        <Card className="bg-slate-800/30 backdrop-blur-lg border-slate-700/50 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Technical Skills Snapshot</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 font-medium">
                Python Programming Language
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-full text-green-400 font-medium">
                Python with DSA
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-violet-600/20 border border-purple-500/30 rounded-full text-purple-400 font-medium">
                Fullstack With AI
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
