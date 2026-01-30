import { useState, useEffect } from "react";
import photo1 from "@/assets/photography-1.jpg";
import photo2 from "@/assets/photography-2.jpg";
import photo3 from "@/assets/photography-3.jpg";
import photo4 from "@/assets/photography-4.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const PhotographySection = () => {
  const photos = [photo1, photo2, photo3, photo4];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="photography" className="py-16 md:py-24 bg-gradient-to-b from-muted via-secondary to-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            Conceptual Photography
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ethiopian Mythology Through Smoke
          </h2>
        </div>

        {/* Photo Carousel */}
        <div className="max-w-md mx-auto mb-10">
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="relative overflow-hidden rounded-lg shadow-elegant aspect-square">
                    <img
                      src={photo}
                      alt={`Conceptual photography piece ${index + 1} - Ethiopian mythology smoke art`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12 bg-background/80 hover:bg-background border-border" />
            <CarouselNext className="right-2 md:-right-12 bg-background/80 hover:bg-background border-border" />
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-foreground/85 text-sm md:text-base leading-relaxed">
            This conceptual photography project draws inspiration from Ethiopian mythology, where a rich  spirits is woven into children’s stories and oral traditions across the country. Through this work, Alemayehu seeks to translate these intangible beings into a visual language, bridging folklore and contemporary art. Smoke is deliberately chosen as the central subject for its elusive, shifting nature at once present and intangible mirroring how these spirits exist in memory, imagination, and belief rather than in physical form. From a cultural perspective, the images honor storytelling as a vessel of ancestral knowledge from a symbolic one, they explore the tension between visibility and invisibility and from a modern artistic lens, they invite viewers to reconsider how myth can be re-experienced in a visual, conceptual world.          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
