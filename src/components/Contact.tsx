import { useState } from 'react';
import { Mail, Send, User, MessageSquare, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!"
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  return <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I'm actively seeking internship opportunities and would love to hear from you!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          {/* Internship Section */}
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-lg border-blue-500/20">
            <CardContent className="p-8 bg-gray-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Seeking Internships</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Currently seeking internship opportunities in software development and programming fields. 
                I'm open to learning and contributing to meaningful projects while expanding my technical expertise.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Available for immediate start</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>Eager to learn new technologies</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Strong work ethic and dedication</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Preferred Contact</h3>
              </div>
              <p className="text-gray-300 mb-6">
                For privacy reasons, email is currently my preferred method of contact. I respond promptly to all inquiries.
              </p>
              <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-white font-medium">narasimhajampana12@gmail.com</span>
                </div>
                <Button size="sm" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600" onClick={() => window.location.href = 'mailto:narasimhajampana12@gmail.com'}>
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Note */}
          <Card className="bg-slate-800/30 backdrop-blur-lg border-slate-700/30">
            <CardContent className="p-6">
              <p className="text-gray-400 text-sm text-center">
                <strong className="text-gray-300">Privacy Note:</strong> I value privacy and currently prefer email communication. 
                LinkedIn and other social profiles may be added in the future.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="bg-slate-800/50 backdrop-blur-lg border-slate-700/50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500" placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500" placeholder="Enter your email" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500" placeholder="What's this about?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none" placeholder="Tell me about your project or internship opportunity..." />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105">
                {isSubmitting ? <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div> : <div className="flex items-center">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </div>}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Contact;