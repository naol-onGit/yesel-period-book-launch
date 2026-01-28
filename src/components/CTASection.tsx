import { Button } from "@/components/ui/button";
import { ShoppingCart, ExternalLink } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-48 h-48 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 left-20 w-56 h-56 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 text-glow">
            Get Your Copy Today
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/80 mb-3">
            Yesel Period is available now on Yebuna Digital Shopping Platform
          </p>
          <p className="text-xl md:text-2xl font-bold text-primary-foreground mb-6">
            ዋጋ 320 ብር
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="hero"
              size="lg"
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a
                href="https://yebuna.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Buy on Yebuna
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-primary-foreground/60 text-xs">
            Secure payment • Fast delivery across Ethiopia
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
