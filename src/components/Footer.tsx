import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold">Prof. Yosi Keller</p>
          <p className="text-sm text-muted-foreground">Faculty of Engineering, Bar-Ilan University</p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="mailto:yosi.keller@gmail.com" className="hover:text-accent transition-colors flex items-center gap-1.5">
            <Mail className="w-4 h-4" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
