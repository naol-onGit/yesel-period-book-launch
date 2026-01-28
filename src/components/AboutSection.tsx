import { BookOpen, Heart, Brain, Sparkles } from "lucide-react";
import bookBack from "@/assets/book-back.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Love & Intimacy",
      description: "Explores love as a force shaped by culture, memory, desire, and social expectation.",
    },
    {
      icon: Brain,
      title: "Philosophy & Consciousness",
      description: "Weaves philosophy with lived experience, allowing emotion and reason to speak to one another.",
    },
    {
      icon: Sparkles,
      title: "Feminism & Agency",
      description: "Affirms women's emotional and philosophical agency within Ethiopian society.",
    },
    {
      icon: BookOpen,
      title: "Cultural Reflection",
      description: "Examines how individuals negotiate intimacy, morality, and selfhood.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About the Book
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Journey Through Love & Consciousness
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Yesel Period stands as a meditation on what it means to think, feel, and love freely in a world shaped by both history and hope.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Breaking Silence, Embracing Truth
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Yesel Period is a bold and intimate exploration of love and consciousness set within the textured realities of Ethiopian social life. In this work, Alemayehu Workshet Alemayehu weaves philosophy with lived experience, allowing emotion and reason to speak to one another rather than compete.
              </p>
              <p>
                Love appears not as a simple romance, but as a force shaped by culture, memory, desire, and social expectation. Through moments of tenderness and conflict, the book examines how individuals negotiate intimacy, morality, and selfhood in a society where tradition and change continuously confront each other.
              </p>
              <p>
                The text challenges inherited assumptions about love, gender, the body, and power, while affirming women's emotional and philosophical agency within Ethiopian society. By blending personal narrative with reflective inquiry, the book invites readers to reconsider love not only as feeling, but as resistance, awareness, and ethical choice.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl transform -rotate-6" />
              <img
                src={bookBack}
                alt="Yesel Period Back Cover"
                className="relative rounded-2xl shadow-elegant max-w-xs md:max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
