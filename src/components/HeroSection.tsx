import { Mail, MapPin, FileText, Linkedin, GraduationCap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg flex-shrink-0">
            <img
              src="https://raw.githubusercontent.com/yosikeller/yosikeller.github.io/main/28710167-3a.jpg"
              alt="Prof. Yosi Keller"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Professor</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Yosi Keller
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-6 leading-relaxed">
              Faculty of Engineering, Bar-Ilan University. Researching computer vision, deep learning, and signal processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Bar-Ilan University, Israel
              </span>
              <a href="mailto:yosi.keller@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                yosi.keller@gmail.com
              </a>
              <a href="https://yosikeller.github.io/download.html?yosi_keller_cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                <FileText className="w-4 h-4 text-accent" />
                CV
              </a>
              <a href="https://scholar.google.com/citations?user=2z7wkUIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                <GraduationCap className="w-4 h-4 text-accent" />
                Scholar
              </a>
              <a href="https://www.linkedin.com/in/yosi-keller/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Linkedin className="w-4 h-4 text-accent" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
