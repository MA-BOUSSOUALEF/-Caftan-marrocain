import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Heart, Crown } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-charcoal via-burgundy/20 to-charcoal border-t border-gold/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-serif text-gold tracking-wider mb-6">
              CAFTAN
              <span className="block text-sm font-light text-ivory tracking-[0.3em] mt-1">
                ROYAL MAROC
              </span>
            </div>
            <p className="text-ivory/80 mb-8 leading-relaxed font-light text-lg">
              L'héritage marocain sublimé par l'élégance couture. Chaque création raconte une histoire 
              d'artisanat millénaire et de raffinement contemporain, pour révéler la beauté authentique 
              de la femme moderne.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/30 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gold/30 hover:to-burgundy/30 transition-all duration-500 group">
                <Instagram className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/30 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gold/30 hover:to-burgundy/30 transition-all duration-500 group">
                <Facebook className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-8 text-gold tracking-wide flex items-center">
              <Crown className="w-5 h-5 mr-2" />
              Contact Royal
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <span className="text-ivory/80 font-light">+212 6 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <span className="text-ivory/80 font-light">contact@caftan-royal.ma</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <span className="text-ivory/80 font-light">Casablanca, Maroc</span>
              </div>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-xl font-serif mb-8 text-gold tracking-wide">Collections</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-ivory/80 hover:text-gold transition-colors duration-300 font-light hover:tracking-wide">Caftans Traditionnels</a></li>
              <li><a href="#" className="text-ivory/80 hover:text-gold transition-colors duration-300 font-light hover:tracking-wide">Prêt-à-Porter</a></li>
              <li><a href="#" className="text-ivory/80 hover:text-gold transition-colors duration-300 font-light hover:tracking-wide">Accessoires Royaux</a></li>
              <li><a href="#" className="text-ivory/80 hover:text-gold transition-colors duration-300 font-light hover:tracking-wide">Créations Sur-Mesure</a></li>
              <li><a href="#" className="text-ivory/80 hover:text-gold transition-colors duration-300 font-light hover:tracking-wide">Broderies Maalam</a></li>
            </ul>
          </div>
        </div>

        {/* Decorative Border */}
        <div className="mt-16 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-ivory/60 flex items-center justify-center font-light text-sm">
            Créé avec <Heart className="w-4 h-4 text-burgundy mx-2 animate-pulse" /> pour sublimer l'héritage marocain
          </p>
          <p className="text-ivory/40 text-xs mt-3 font-light tracking-wide">
            © 2024 Caftan Royal Maroc. Tous droits réservés. | Artisanat d'exception depuis 1985
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;