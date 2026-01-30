import photo1 from "@/assets/photography-1.jpg";
import photo2 from "@/assets/photography-2.jpg";
import photo3 from "@/assets/photography-3.jpg";
import photo4 from "@/assets/photography-4.jpg";

const PhotographySection = () => {
  const photos = [photo1, photo2, photo3, photo4];

  return (
    <section id="photography" className="py-16 md:py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-medium mb-3">
            Conceptual Photography
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ethiopian Mythology Through Smoke
          </h2>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-elegant group aspect-square"
            >
              <img
                src={photo}
                alt={`Conceptual photography piece ${index + 1} - Ethiopian mythology smoke art`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/85 text-sm md:text-base leading-relaxed">
            This conceptual photography project draws inspiration from Ethiopian mythology, where a rich world of spirits is woven into children's stories and oral traditions across the country. Through this work, Alemayehu seeks to translate these intangible beings into a visual language, bridging folklore and contemporary art. Smoke is deliberately chosen as the central subject for its elusive, shifting nature—at once present and intangible—mirroring how these spirits exist in memory, imagination, and belief rather than in physical form. From a cultural perspective, the images honor storytelling as a vessel of ancestral knowledge; from a symbolic one, they explore the tension between visibility and invisibility; and from a modern artistic lens, they invite viewers to reconsider how myth can be re-experienced in a visual, conceptual world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
