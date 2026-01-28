const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="text-center md:text-left">
            <p className="font-semibold">Yesel Period</p>
            <p className="text-primary-foreground/70 text-xs">
              By Alemayehu Workshet Alemayehu
            </p>
          </div>

          <p className="text-primary-foreground/70 text-xs">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
