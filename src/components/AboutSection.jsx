import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Deba_ResumeFE.pdf'; // Path inside public folder
    link.download = 'Deba_Resume.pdf'; // Optional: rename the file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Agentic AI Enthusiast
            </h3>

            <p className="text-muted-foreground">
              With over 4 years of experience in frontend development, I specialize in building responsive,
              accessible, and performance-driven web interfaces.
              I take pride in translating ideas into clean, user-focused digital experiences.

            </p>

            <p className="text-muted-foreground">
              Driven by curiosity and a passion for agentic AI, I constantly explore new tools
              and techniques to deliver smarter, modern solutions that keep pace with the evolving tech landscape.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <button
                onClick={handleDownload}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Building fast, secure, and scalable backend systems with clean API design.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Agentic AI Enthusiast</h4>
                  <p className="text-muted-foreground">
                    Exploring autonomous AI systems to drive innovation and solve real-world challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
