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
                Alemayehu Workshet Alemayehu is the author of Yesel Period, a thought provoking book rooted in the lived experiences and intellectual traditions of the Ethiopian community. Drawing on emotions, reasoning, philosophy, psychology, and cultural traditions, his writing explores how personal and collective realities shape human understanding. Through a reflective and analytical lens, he connects inner emotional worlds with broader social and philosophical questions.
              </p>
              <p>
                Alemayehu holds a B.A. degree in Social Science and a B.A. degree in Language and Literature, a background that strongly informs his multidisciplinary approach to writing. He has worked in various governmental and private institutions, gaining diverse professional experience. Currently, he is the owner and CEO of Dok’a Podcast and manages private business , balancing creative expression with entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
