import { Phone, Mail, MapPin } from "lucide-react";

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
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contact the Author
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about Yesel Period or interested in connecting with the author? Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors break-all">
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
