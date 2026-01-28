import { Button } from "@/components/ui/button";
import { ShoppingCart, ExternalLink } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-glow">
            Get Your Copy Today
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4">
            Yesel Period is available now on Yebuna Digital Shopping Platform
          </p>
          <p className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
            ዋጋ 320 ብር
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a
                href="https://yebuna.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Buy on Yebuna
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <p className="mt-8 text-primary-foreground/60 text-sm">
            Secure payment • Fast delivery across Ethiopia
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
