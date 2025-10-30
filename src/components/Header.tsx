import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoHeader from "@/assets/logo-header.png";

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "sobre" },
    { label: "Serviços", id: "servicos" },
    { label: "Contato", id: "contato" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-white/90"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src={logoHeader} 
              alt="Móveis Click - Compre no conforto do seu lar" 
              className="h-10 sm:h-12 w-auto"
            />
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-primary">Móveis Click</h2>
              <p className="text-xs text-muted-foreground hidden sm:block">Compre no conforto do seu lar!</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="default"
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-primary hover:bg-primary-light shadow-soft"
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium py-3 px-4 rounded-lg border border-transparent hover:border-primary/20 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center justify-between">
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.label}
                    </span>
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                  </span>
                </button>
              ))}
              <div className="pt-2">
                <Button
                  variant="default"
                  onClick={() => scrollToSection("contato")}
                  className="bg-gradient-primary hover:bg-primary-light shadow-medium w-full text-base font-semibold py-6 rounded-lg hover:scale-[1.02] transition-transform duration-200"
                >
                  Fale Conosco
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