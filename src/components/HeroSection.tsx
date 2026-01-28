import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import bookFront from "@/assets/book-front.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 hero-gradient relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/20">
              New Release
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-glow">
              Yesel Period
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 font-medium">
              By Alemayehu Workshet Alemayehu
            </p>
            
            <p className="text-base md:text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A bold and intimate exploration of love and consciousness set within the textured realities of Ethiopian social life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <a
                  href="https://yebuna.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your Copy
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <a href="#about">Learn More</a>
              </Button>
            </div>

            <div className="mt-8 text-primary-foreground/70 text-sm">
              <span className="font-semibold">ዋጋ 320 ብር</span> • Available on Yebuna
            </div>
          </div>

          {/* Book Cover */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-foreground/20 rounded-2xl blur-2xl transform rotate-6" />
              <img
                src={bookFront}
                alt="Yesel Period Book Cover"
                className="relative rounded-2xl shadow-elegant max-w-xs md:max-w-sm lg:max-w-md w-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
