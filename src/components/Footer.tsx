import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg mb-1">Yesel Period</p>
            <p className="text-primary-foreground/70 text-sm">
              By Alemayehu Workshet Alemayehu
            </p>
          </div>

          <div className="flex items-center gap-1 text-sm text-primary-foreground/70">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent fill-current" />
            <span>in Ethiopia</span>
          </div>

          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
