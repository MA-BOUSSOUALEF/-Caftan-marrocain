import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Instagram, Facebook } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'Notre Histoire' },
    { id: 'collection', label: 'Prêt-à-Porter' },
    { id: 'accessories', label: 'Accessoires' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-ivory/95 backdrop-blur-md shadow-lg border-b border-gold/20' 
        : 'bg-transparent'
    }`}>
      {/* Top bar */}
      <div className={`transition-all duration-500 ${
        isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
      }`}>
        <div className="bg-gradient-to-r from-burgundy/90 to-emerald/90 py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-ivory">
                <Phone className="w-3 h-3" />
                <span className="font-light tracking-wide">+212 6 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2 text-ivory">
                <Mail className="w-3 h-3" />
                <span className="font-light tracking-wide">contact@caftan-royal.ma</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Instagram className="w-4 h-4 cursor-pointer text-ivory hover:text-gold transition-colors duration-300" />
              <Facebook className="w-4 h-4 cursor-pointer text-ivory hover:text-gold transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`transition-all duration-500 ${
              isScrolled ? 'text-2xl' : 'text-3xl'
            } font-serif text-burgundy tracking-wider`}>
              CAFTAN
              <span className="block text-xs font-light text-gold tracking-[0.3em] mt-1">
                ROYAL MAROC
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative text-sm font-light tracking-wide transition-all duration-300 group ${
                  currentPage === item.id 
                    ? 'text-burgundy' 
                    : isScrolled ? 'text-charcoal hover:text-burgundy' : 'text-ivory hover:text-gold'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${
                  currentPage === item.id ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="relative overflow-hidden bg-gradient-to-r from-gold to-burgundy text-ivory px-8 py-3 text-sm font-light tracking-wide transition-all duration-500 hover:shadow-lg hover:scale-105 group">
              <span className="relative z-10">Prendre RDV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-burgundy to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-charcoal' : 'text-ivory'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-charcoal' : 'text-ivory'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-gold/20 bg-ivory/95 backdrop-blur-md rounded-lg">
            <nav className="flex flex-col space-y-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-left text-sm font-light tracking-wide transition-colors duration-300 ${
                    currentPage === item.id 
                      ? 'text-burgundy' 
                      : 'text-charcoal hover:text-burgundy'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="mt-6 bg-gradient-to-r from-gold to-burgundy text-ivory px-8 py-3 text-sm font-light tracking-wide text-left transition-all duration-300">
                Prendre RDV
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;