// import React from 'react';
// import { Phone, Mail, MapPin, Instagram, Facebook, Heart, Crown } from 'lucide-react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gradient-to-br from-charcoal via-burgundy/20 to-charcoal border-t border-gold/20">
//       <div className="container mx-auto px-4 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           {/* Brand */}
//           <div className="md:col-span-2">
//             <div className="text-3xl font-serif text-gold tracking-wider mb-6">
//               CAFTAN
//               <span className="block text-sm font-light text-ivory tracking-[0.3em] mt-1">
//                 ROYAL MAROC
//               </span>
//             </div>
//             <p className="text-ivory/80 mb-8 leading-relaxed font-light text-lg">
//               L'héritage marocain sublimé par l'élégance couture. Chaque création raconte une histoire 
//               d'artisanat millénaire et de raffinement contemporain, pour révéler la beauté authentique 
//               de la femme moderne.
//             </p>
//             <div className="flex space-x-4">
//               <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/30 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gold/30 hover:to-burgundy/30 transition-all duration-500 group">
//                 <Instagram className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
//               </div>
//               <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/30 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-gold/30 hover:to-burgundy/30 transition-all duration-500 group">
//                 <Facebook className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
//               </div>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-serif mb-8 text-gold tracking-wide flex items-center">
//               <Crown className="w-5 h-5 mr-2" />
//               Contact Royal
//             </h3>
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4 group">
//                 <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <Phone className="w-4 h-4 text-gold" />
//                 </div>
//                 <span className="text-ivory/80 font-light">+212 6 XX XX XX XX</span>
//               </div>
//               <div className="flex items-center space-x-4 group">
//                 <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <Mail className="w-4 h-4 text-gold" />
//                 </div>
//                 <span className="text-ivory/80 font-light">contact@caftan-royal.ma</span>
//               </div>
//               <div className="flex items-center space-x-4 group">
//                 <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <MapPin className="w-4 h-4 text-gold" />
//                 </div>
//                 <span className="text-ivory/80 font-light">Casablanca, Maroc</span>
//               </div>
//             </div>
//           </div>

//           {/* Collections */}
//           <div>
//             <h3 className="text-xl font-serif mb-8 text-gold tracking-wide">Collections</h3>
//             <ul className="space-y-4">
//               <li><a href="#" className="text-ivory/80 hover:text-gold transition-colors duration-300 font-light hover:tracking-wide">Caftans Traditionnels</a></li>
//               <li><a href="#" className="text-ivory/80 hover:text-gold transition-colors duration-300 font-light hover:tracking-wide">Prêt-à-Porter</a></li>
//               <li><a href="#" className="text-ivory/80 hover:text-gold transition-colors duration-300 font-light hover:tracking-wide">Accessoires Royaux</a></li>
//               <li><a href="#" className="text-ivory/80 hover:text-gold transition-colors duration-300 font-light hover:tracking-wide">Créations Sur-Mesure</a></li>
//               <li><a href="#" className="text-ivory/80 hover:text-gold transition-colors duration-300 font-light hover:tracking-wide">Broderies Maalam</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Decorative Border */}
//         <div className="mt-16 mb-8">
//           <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="text-center">
//           <p className="text-ivory/60 flex items-center justify-center font-light text-sm">
//             Créé avec <Heart className="w-4 h-4 text-burgundy mx-2 animate-pulse" /> pour sublimer l'héritage marocain
//           </p>
//           <p className="text-ivory/40 text-xs mt-3 font-light tracking-wide">
//             © 2024 Caftan Royal Maroc. Tous droits réservés. | Artisanat d'exception depuis 1985
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Heart, Crown, Star, Sparkles, Award, Users, Clock, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const collections = [
    { name: 'Caftans Traditionnels', href: '#', icon: Crown },
    { name: 'Prêt-à-Porter', href: '#', icon: Star },
    { name: 'Accessoires Royaux', href: '#', icon: Sparkles },
    { name: 'Créations Sur-Mesure', href: '#', icon: Award },
    { name: 'Broderies Maalam', href: '#', icon: Heart }
  ];

  const services = [
    { name: 'Consultation Privée', href: '#' },
    { name: 'Essayage à Domicile', href: '#' },
    { name: 'Service Retouches', href: '#' },
    { name: 'Livraison Premium', href: '#' },
    { name: 'Garantie Qualité', href: '#' }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: '#', 
      name: '@caftanroyal',
      color: 'from-pink-500 to-purple-600',
      followers: '15K' 
    },
    { 
      icon: Facebook, 
      href: '#', 
      name: 'Caftan Royal Maroc',
      color: 'from-blue-600 to-blue-800',
      followers: '8K' 
    }
  ];


  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Particules d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Stats Section */}
  

      {/* Main Footer Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 animate-slide-up">
              <div className="group cursor-pointer mb-8">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-amber-100 to-rose-100 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-orange-300 transition-all duration-300">
                  CAFTAN
                </div>
                <div className="text-sm font-light text-amber-300 tracking-[0.3em] mt-1 group-hover:text-amber-200 transition-colors duration-300">
                  ROYAL MAROC
                </div>
                
                {/* Effet de brillance sur le logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
              </div>
              
              <p className="text-white/80 mb-8 leading-relaxed font-light text-lg max-w-lg">
                L'héritage marocain sublimé par l'élégance couture. Chaque création raconte une histoire 
                d'artisanat millénaire et de raffinement contemporain, pour révéler la beauté authentique 
                de chaque femme.
              </p>
              
              {/* Social Media avec stats */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-rose-400" />
                  Rejoignez Notre Communauté
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={index}
                        href={social.href}
                        className={`group relative overflow-hidden w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110`}
                      >
                        <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                        
                        {/* Tooltip avec followers */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {social.followers} followers
                        </div>
                        
                        {/* Effet de brillance */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700 rounded-xl"></div>
                      </a>
                    );
                  })}
                </div>
                <p className="text-sm text-white/60">
                  Suivez nos dernières créations et les coulisses de notre atelier
                </p>
              </div>
            </div>

            {/* Collections */}
            <div className="animate-slide-up delay-200">
              <h3 className="text-xl font-bold mb-8 text-white flex items-center">
                <Crown className="w-6 h-6 mr-3 text-amber-400" />
                Collections
              </h3>
              <ul className="space-y-4">
                {collections.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={item.href} 
                        className="group flex items-center text-white/80 hover:text-amber-300 transition-all duration-300 py-2 rounded-lg hover:bg-white/5 px-2 -mx-2"
                      >
                        <IconComponent className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-light group-hover:tracking-wide transition-all duration-300">
                          {item.name}
                        </span>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Services & Contact */}
            <div className="animate-slide-up delay-300">
              <h3 className="text-xl font-bold mb-8 text-white flex items-center">
                <Star className="w-6 h-6 mr-3 text-amber-400" />
                Services & Contact
              </h3>
              
              {/* Services */}
              <div className="mb-8">
                <h4 className="text-white/90 font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
                <ul className="space-y-3">
                  {services.slice(0, 3).map((service, index) => (
                    <li key={index}>
                      <a href={service.href} className="text-white/70 hover:text-amber-300 transition-colors duration-300 text-sm font-light">
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-white/90 font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
                
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/80 font-light text-sm">+212 6 XX XX XX XX</span>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/80 font-light text-sm">contact@caftan-royal.ma</span>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/80 font-light text-sm">Casablanca, Maroc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 py-16 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Restez Informée de Nos Nouveautés
            </h3>
            <p className="text-white/80 mb-8 font-light">
              Recevez en exclusivité nos dernières créations et offres spéciales
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white/60 flex items-center justify-center font-light text-sm">
                Créé avec <Heart className="w-4 h-4 text-rose-400 mx-2 animate-pulse" /> pour sublimer l'héritage marocain
              </p>
              <div className="flex items-center space-x-6 text-white/40 text-xs">
                <a href="#" className="hover:text-amber-300 transition-colors duration-300">Mentions Légales</a>
                <a href="#" className="hover:text-amber-300 transition-colors duration-300">Confidentialité</a>
                <a href="#" className="hover:text-amber-300 transition-colors duration-300">CGV</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <p className="text-white/40 text-xs font-light tracking-wide">
                © 2024 Caftan Royal Maroc. Tous droits réservés.
              </p>
              <div className="w-px h-4 bg-white/20"></div>
              <p className="text-white/40 text-xs font-light">
                Artisanat d'exception depuis 1985
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
        
        {/* Effet de brillance */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-all duration-700 rounded-full"></div>
      </button>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-amber-400/20 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-rose-400/30 rounded-full animate-float-delay opacity-40"></div>
      <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-purple-400/15 rounded-full animate-float-slow opacity-50"></div>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(180deg); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-6px) scale(1.1); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite;
          animation-delay: 3s;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
          animation-delay: 5s;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </footer>
  );
};

export default Footer;