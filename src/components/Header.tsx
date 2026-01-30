import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#author", label: "Author" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
          >
            Alemayehu Workshet
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 font-medium ${isScrolled
                  ? "text-foreground/70 hover:text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant={isScrolled ? "hero" : "heroOutline"}
              size="lg"
              asChild
              className={
                isScrolled
                  ? ""
                  : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              }
            >
              <a
                href="https://ye-buna.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the Book
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${isScrolled
              ? "text-foreground hover:bg-primary/10"
              : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className={`md:hidden py-6 px-2 rounded-b-3xl shadow-xl animate-in slide-in-from-top-5 duration-300 ${isScrolled
              ? "bg-background/98 backdrop-blur-lg"
              : "bg-primary/95 backdrop-blur-lg"
              }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-200 font-medium py-3 px-4 rounded-lg ${isScrolled
                    ? "text-foreground hover:text-primary hover:bg-primary/10"
                    : "text-primary-foreground hover:bg-primary-foreground/15"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 px-2">
                <Button
                  variant={isScrolled ? "hero" : "heroOutline"}
                  size="lg"
                  asChild
                  className={`w-full ${isScrolled
                    ? ""
                    : "border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20"
                    }`}
                >
                  <a
                    href="https://ye-buna.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get the Book
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
