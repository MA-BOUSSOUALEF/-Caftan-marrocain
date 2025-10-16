
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Instagram, Facebook, Crown, Sparkles, Star, Heart } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const navigationItems = [
    { id: 'home', label: 'Accueil', icon: Crown },
    { id: 'about', label: 'Notre Histoire', icon: Heart },
    { id: 'collection', label: 'Prêt-à-Porter', icon: Star },
    { id: 'accessories', label: 'Accessoires', icon: Sparkles },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-slate-200/50' 
        : 'bg-transparent'
    }`}>
      {/* Top bar avec animations */}
      <div className={`transition-all duration-500 overflow-hidden ${
        isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'
      }`}>
        <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-3 relative overflow-hidden">
          {/* Particules d'arrière-plan */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-float"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-rose-400/40 rounded-full animate-float-delay"></div>
          </div>
          
          <div className="container mx-auto px-4 flex justify-between items-center text-sm relative z-10">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-white/90 hover:text-amber-300 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-light tracking-wide">+33 6 65 71 77 35</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 hover:text-amber-300 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="font-light tracking-wide">IkramRadouani@gmail.com</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 transform hover:scale-110 group"
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
              
              <div className="w-px h-6 bg-white/20"></div>
              
              <div className="flex items-center space-x-2 text-amber-300">
                <Crown className="w-4 h-4 animate-pulse" />
                <span className="text-xs font-light tracking-wider uppercase">Excellence Royale</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          {/* Logo avec animation */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigation('home')}
          >
            <div className={`transition-all duration-500 ${
              isScrolled ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'
            }`}>
              <div className="relative">
                <div className={`font-bold bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300 ${
                  !isScrolled ? 'text-white' : ''
                }`}>
                  CAFTAN
                </div>
                <div className={`text-xs sm:text-sm font-light tracking-[0.3em] mt-1 transition-all duration-300 ${
                  isScrolled 
                    ? 'text-amber-600 group-hover:text-orange-600' 
                    : 'text-amber-300 group-hover:text-amber-100'
                }`}>
                  ROYAL MAROC
                </div>
                
                {/* Effet de brillance sur le logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
              </div>
              
              {/* Couronne flottante */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Crown className={`w-4 h-4 ${isScrolled ? 'text-amber-500' : 'text-amber-300'} animate-bounce`} />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-12">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`relative group flex items-center space-x-2 text-sm font-medium tracking-wide transition-all duration-300 py-2 px-4 rounded-full ${
                    currentPage === item.id 
                      ? isScrolled 
                        ? 'text-amber-600 bg-amber-50' 
                        : 'text-amber-300 bg-white/10 backdrop-blur-sm'
                      : isScrolled 
                        ? 'text-slate-700 hover:text-amber-600 hover:bg-amber-50' 
                        : 'text-white/90 hover:text-amber-300 hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                  
                  {/* Indicator animé */}
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full ${
                    currentPage === item.id ? 'w-full' : ''
                  }`}></span>
                  
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700 rounded-full"></div>
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white px-6 sm:px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 transform">
              <span className="relative z-10 flex items-center">
                <Crown className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Prendre RDV
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Particules sur le bouton */}
              <div className="absolute top-1 right-1 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
              } ${isScrolled ? 'text-slate-700' : 'text-white'}`} />
              <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
              } ${isScrolled ? 'text-slate-700' : 'text-white'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-6 py-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/50">
            <nav className="flex flex-col space-y-2 px-4">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`flex items-center space-x-3 text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      currentPage === item.id 
                        ? 'text-amber-600 bg-amber-50 shadow-sm' 
                        : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                    {currentPage === item.id && (
                      <div className="ml-auto w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                    )}
                  </button>
                );
              })}
              
              <div className="px-4 pt-4 border-t border-slate-200 mt-4">
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg flex items-center justify-center">
                  <Crown className="w-4 h-4 mr-2" />
                  Prendre RDV
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Styles CSS pour les animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(180deg); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-180deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 6s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </header>
  );
};

export default Header;