import authorImage from "@/assets/author.jpg";

const AuthorSection = () => {
  return (
    <section id="author" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            The Author
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Meet Alemayehu Workshet
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Author Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl" />
              <div className="relative overflow-hidden rounded-full shadow-elegant w-56 h-56 md:w-64 md:h-64">
                <img
                  src={authorImage}
                  alt="Alemayehu Workshet Alemayehu - Author of Yesel Period"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Alemayehu Workshet Alemayehu
            </h3>
            <div className="w-16 h-1 bg-primary rounded-full mb-5" />
            
            <div className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                Alemayehu Workshet Alemayehu is a thoughtful Ethiopian writer whose work explores the intersections of love, philosophy, and social consciousness in contemporary Ethiopian society.
              </p>
              <p>
                With Yesel Period, he demonstrates intellectual courage in addressing topics that have long been surrounded by silence—sex, feminism, gender, and power—while maintaining deep respect for Ethiopian cultural traditions.
              </p>
              <p>
                His writing style blends personal narrative with philosophical inquiry, creating works that are both emotionally resonant and intellectually stimulating. Through his words, readers are invited to examine their own assumptions about love, relationships, and what it means to live authentically.
              </p>
            </div>

            <div className="mt-6 p-5 rounded-xl bg-card border border-border/50 shadow-card">
              <blockquote className="text-foreground italic text-base">
                "Love is not only feeling, but resistance, awareness, and ethical choice."
              </blockquote>
              <p className="mt-2 text-primary font-medium text-sm">
                — From Yesel Period
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
