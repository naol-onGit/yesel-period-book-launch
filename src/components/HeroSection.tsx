import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import book3d from "@/assets/book-3d.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center pt-16 pb-12 hero-gradient relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block px-3 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-xs font-medium mb-4 backdrop-blur-sm border border-primary-foreground/20">
              New Release
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight text-glow">
              Yesel Period
            </h1>

            <p className="text-base md:text-lg text-primary-foreground/90 mb-3 font-medium">
              By Alemayehu Workshet Alemayehu
            </p>

            <p className="text-sm md:text-base text-primary-foreground/80 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A bold and intimate exploration of love and consciousness set within the textured realities of Ethiopian social life.
            </p>

            <div className="mt-6 text-primary-foreground/70 text-sm">
              <span className="font-semibold">ዋጋ 320 ብር</span> • Available on Yebuna
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <a
                  href="https://yebuna.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Copy
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>

          {/* 3D Book */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img
                src={book3d}
                alt="Yesel Period Book"
                className="relative max-w-[320px] md:max-w-[400px] lg:max-w-[480px] w-full transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
