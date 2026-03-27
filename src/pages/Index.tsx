import HeroSection from "@/components/HeroSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import StudentsSection from "@/components/StudentsSection";
import Footer from "@/components/Footer";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-lg font-semibold tracking-tight">Y. Keller</span>
        <div className="hidden sm:flex gap-6 text-sm font-medium text-muted-foreground">
          {[
            ["research", "Research"],
            ["publications", "Publications"],
            ["students", "Students"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="hover:text-accent transition-colors"
            >
              {label}
            </button>
          ))}
          <a href="mailto:yosi.keller@gmail.com" className="hover:text-accent transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="research">
        <ResearchSection />
      </div>
      <div id="publications">
        <PublicationsSection />
      </div>
      <div id="students">
        <StudentsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
