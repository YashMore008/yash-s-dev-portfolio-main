import { Mail, Phone, Github, Linkedin, Twitter, Code2, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const skills = [
    { name: "HTML", icon: Code2, description: "Semantic markup and modern HTML5 standards" },
    { name: "CSS", icon: Globe, description: "Responsive design with modern layouts and animations" },
    { name: "JavaScript", icon: Code2, description: "ES6+ features and modern JavaScript development" },
    { name: "Node.js", icon: Database, description: "Server-side JavaScript and RESTful APIs" },
    { name: "React.js", icon: Code2, description: "Component-based UI development and hooks" },
    { name: "C/C++", icon: Code2, description: "System programming and data structures" },
    { name: "Python", icon: Code2, description: "Scripting, automation, and data analysis" },
    { name: "VLSI", icon: Code2, description: "Digital circuit design and hardware description" },
    { name: "Verilog", icon: Code2, description: "Hardware description language for chip design" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-smooth">About</button>
              <button onClick={() => scrollToSection("skills")} className="text-foreground hover:text-primary transition-smooth">Skills</button>
              <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-primary transition-smooth">Projects</button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-smooth">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              Yash More
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto">
              Full Stack Developer | Building modern web applications with cutting-edge technologies
            </p>
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground shadow-soft hover:shadow-glow transition-smooth"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <Card className="shadow-soft">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies and embedded systems. 
                I love creating intuitive, dynamic user experiences and building robust backend systems. 
                With a strong foundation in both frontend and backend development, along with specialized knowledge 
                in VLSI design and Verilog hardware description language, I specialize in creating seamless, 
                efficient applications that bridge software and hardware. My embedded systems experience allows me 
                to work on projects ranging from web applications to digital circuit design and IoT solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="shadow-soft hover:shadow-glow transition-smooth hover:scale-105 border-2 hover:border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg gradient-primary">
                      <skill.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{skill.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{skill.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Project</h2>
          <Card className="shadow-glow border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-3xl">Image Forgery Detection</CardTitle>
                <Badge className="gradient-primary text-primary-foreground">Machine Learning</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-lg">
                An advanced web application that analyzes and compares original and tampered images 
                to detect forgery with high accuracy using machine learning algorithms.
              </CardDescription>
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Upload and compare original and suspected tampered images</li>
                  <li>Real-time forgery detection with accuracy percentage</li>
                  <li>Advanced image processing algorithms</li>
                  <li>Intuitive user interface for easy analysis</li>
                  <li>Detailed comparison reports</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Machine Learning</Badge>
                <Badge variant="secondary">Computer Vision</Badge>
                <Badge variant="secondary">Web Development</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <Card className="shadow-soft">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth">
                  <div className="p-3 rounded-full gradient-primary">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:officialyashmore1@gmail.com" className="text-primary hover:underline">
                      officialyashmore1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth">
                  <div className="p-3 rounded-full gradient-primary">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:9657532506" className="text-primary hover:underline">
                      +91 9657532506
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="font-semibold text-center mb-4">Connect with me</p>
                  <div className="flex justify-center gap-4">
                    <Button size="icon" variant="outline" className="hover:gradient-primary hover:text-primary-foreground transition-smooth">
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:gradient-primary hover:text-primary-foreground transition-smooth">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:gradient-primary hover:text-primary-foreground transition-smooth">
                      <Twitter className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Portfolio. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
