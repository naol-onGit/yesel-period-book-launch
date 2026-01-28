import authorImage from "@/assets/author.jpg";

const AuthorSection = () => {
  return (
    <section id="author" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            The Author
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Meet Alemayehu Workshet
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Author Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-2xl transform rotate-3" />
              <div className="relative overflow-hidden rounded-3xl shadow-elegant">
                <img
                  src={authorImage}
                  alt="Alemayehu Workshet Alemayehu - Author of Yesel Period"
                  className="w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Alemayehu Workshet Alemayehu
            </h3>
            <div className="w-20 h-1 bg-primary rounded-full mb-6" />
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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

            <div className="mt-8 p-6 rounded-2xl bg-card border border-border/50 shadow-card">
              <blockquote className="text-foreground italic text-lg">
                "Love is not only feeling, but resistance, awareness, and ethical choice."
              </blockquote>
              <p className="mt-3 text-primary font-medium">
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
