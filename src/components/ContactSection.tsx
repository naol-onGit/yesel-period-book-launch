import { Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "0912 050 327",
      href: "tel:+251912050327",
    },
    {
      icon: Mail,
      label: "Email",
      value: "alemayehuworkshet957@gmail.com",
      href: "mailto:alemayehuworkshet957@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            Get in Touch
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Contact the Author
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Have questions about Yesel Period or interested in connecting with the author? Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group p-6 rounded-xl bg-card border border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-3 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors whitespace-nowrap">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
