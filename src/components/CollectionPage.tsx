import React, { useState, useEffect } from 'react';
import { Crown, Filter, Heart, Star, Eye, ShoppingBag, Zap, Sparkles, Award } from 'lucide-react';

const CollectionPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const caftans = [
    {
      id: 1,
      name: "Caftan Amira",
      style: "moderne",
      color: "bordeaux",
      occasion: "soiree",
      price: "À partir de 200€",
      image: "https://i.ibb.co/sdbZ2z9T/caftan-4.jpg",
      description: "Caftan moderne en velours bordeaux avec broderies dorées Maalam",
      details: "Broderies main • Velours noble • Coupe moderne",
      badge: "Bestseller",
      rating: 5
    },
    {
      id: 2,
      name: "Caftan Sultane",
      style: "traditionnel",
      color: "emeraude",
      occasion: "mariage",
      price: "À partir de 250€",
      image: "https://i.ibb.co/nsjrhckJ/caftan-5.jpg",
      description: "Caftan traditionnel en soie émeraude avec Sfifa authentique",
      details: "Sfifa traditionnelle • Soie pure • Coupe impériale",
      badge: "Premium",
      rating: 5
    },
    {
      id: 3,
      name: "Caftan Princesse",
      style: "moderne",
      color: "champagne",
      occasion: "casual",
      price: "À partir de 200€",
      image: "https://i.ibb.co/B2kCq7qp/1.jpg",
      description: "Caftan léger en mousseline champagne pour le quotidien chic",
      details: "Mousseline fluide • Broderies discrètes • Confort royal",
      badge: "Nouveau",
      rating: 4
    },
    {
      id: 4,
      name: "Caftan Jasmine",
      style: "contemporain",
      color: "ivoire",
      occasion: "soiree",
      price: "À partir de 150€",
      image: "https://i.ibb.co/fYvT66cm/caftan-3.jpg",
      description: "Caftan contemporain ivoire avec détails perlés délicats",
      details: "Perlage main • Coupe ajustée • Élégance moderne",
      badge: "Tendance",
      rating: 5
    },
    {
      id: 5,
      name: "Caftan Zahra",
      style: "traditionnel",
      color: "or",
      occasion: "mariage",
      price: "À partir de 150€",
      image: "https://i.ibb.co/FqVNFcXm/caftan-6.jpg",
      description: "Caftan de mariée en brocart doré avec Aakads précieux",
      details: "Brocart royal • Aakads authentiques • Pièce unique",
      badge: "Exclusif",
      rating: 5
    },
    {
      id: 6,
      name: "Caftan Malika",
      style: "moderne",
      color: "bleu",
      occasion: "casual",
      price: "À partir de 350€",
      image: "https://i.ibb.co/LXZkt44R/accesoire-7.jpg",
      description: "Caftan moderne bleu nuit avec motifs géométriques",
      details: "Motifs contemporains • Coupe fluide • Style urbain",
      badge: "Éco-responsable",
      rating: 4
    }
  ];

  const filters = [
    { id: 'all', name: 'Toute la Collection', icon: Crown, count: caftans.length },
    { id: 'soiree', name: 'Soirée', icon: Star, count: caftans.filter(c => c.occasion === 'soiree').length },
    { id: 'mariage', name: 'Mariage', icon: Heart, count: caftans.filter(c => c.occasion === 'mariage').length },
    { id: 'casual', name: 'Quotidien Chic', icon: ShoppingBag, count: caftans.filter(c => c.occasion === 'casual').length }
  ];

  const styles = [
    { id: 'all', name: 'Tous les Styles' },
    { id: 'traditionnel', name: 'Traditionnel' },
    { id: 'moderne', name: 'Moderne' },
    { id: 'contemporain', name: 'Contemporain' }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Bestseller': return 'from-amber-500 to-orange-500';
      case 'Premium': return 'from-purple-500 to-indigo-600';
      case 'Nouveau': return 'from-green-500 to-emerald-600';
      case 'Tendance': return 'from-pink-500 to-rose-600';
      case 'Exclusif': return 'from-gold-500 to-yellow-600';
      case 'Éco-responsable': return 'from-teal-500 to-cyan-600';
      default: return 'from-slate-500 to-gray-600';
    }
  };

  const filteredCaftans = caftans.filter(caftan => {
    const matchesFilter = selectedFilter === 'all' || caftan.occasion === selectedFilter;
    const matchesStyle = selectedStyle === 'all' || caftan.style === selectedStyle;
    return matchesFilter && matchesStyle;
  });

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 overflow-hidden">
      {/* Hero Section avec Parallax */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <img
            src="https://i.ibb.co/nsjrhckJ/caftan-5.jpg"
            alt="Collection de caftans"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-800/40 to-rose-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-rose-400/40 rounded-full animate-float-delay"></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-purple-400/20 rounded-full animate-float-slow"></div>
        </div>

        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`max-w-4xl mx-auto text-center text-white transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="inline-flex items-center space-x-2 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <Crown className="w-5 h-5 text-amber-400 animate-pulse" />
                <span className="text-amber-200 font-light tracking-wider text-sm uppercase">
                  Collection Exclusive
                </span>
                <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-amber-100 to-rose-100 bg-clip-text text-transparent">
                  Prêt-à-Porter Royal
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
                Découvrez notre collection de caftans d'exception, prêts à sublimer votre élégance 
                avec un savoir-faire artisanal unique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section avec design moderne */}
      <section className="py-16 bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Occasion Filters */}
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <Filter className="w-5 h-5 mr-2 text-amber-500" />
              <h3 className="text-lg font-bold text-slate-800">Filtrer par Occasion</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => {
                const IconComponent = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                      selectedFilter === filter.id
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25'
                        : 'bg-white/80 text-slate-700 hover:bg-white hover:shadow-md border border-slate-200'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {filter.name}
                    <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                      selectedFilter === filter.id ? 'bg-white/20' : 'bg-slate-100'
                    }`}>
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Style Filters */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Style</h3>
            <div className="flex flex-wrap gap-3">
              {styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedStyle === style.id
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg'
                      : 'bg-white/80 text-slate-700 hover:bg-white hover:shadow-md border border-slate-200'
                  }`}
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filteredCaftans.map((caftan, index) => (
              <div 
                key={caftan.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-slate-100"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? 'slideUp 0.8s ease-out forwards' : 'none'
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={caftan.image}
                    alt={caftan.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors transform hover:scale-110 shadow-lg">
                        <Eye className="w-5 h-5 text-slate-700" />
                      </button>
                      <button className="bg-gradient-to-r from-rose-400 to-pink-500 p-3 rounded-full hover:shadow-lg transition-all transform hover:scale-110">
                        <Heart className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Badge Premium */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${getBadgeColor(caftan.badge)} text-white text-xs font-semibold rounded-full shadow-lg`}>
                      <Zap className="w-3 h-3 mr-1" />
                      {caftan.badge}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < caftan.rating ? 'text-amber-400 fill-current' : 'text-slate-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                    {caftan.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-light">
                    {caftan.description}
                  </p>
                  
                  <div className="mb-4 p-3 bg-gradient-to-r from-amber-50 to-rose-50 rounded-lg border border-amber-100">
                    <p className="text-sm text-amber-700 font-medium flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-amber-500" />
                      {caftan.details}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                      {caftan.price}
                    </span>
                    <div className="flex items-center text-sm text-slate-500">
                      <Award className="w-4 h-4 mr-1 text-amber-500" />
                      Pièce d'Exception
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-slate-800 to-slate-900 text-white py-3 px-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Voir Détails
                    </button>
                    <button className="px-4 py-3 border-2 border-amber-400 text-amber-600 rounded-full hover:bg-amber-400 hover:text-white transition-all duration-300 font-semibold">
                      Essayage
                    </button>
                  </div>
                </div>

                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Stats */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Excellence en Chiffres
            </h2>
            <p className="text-lg text-white/80 font-light">
              Notre engagement qualité depuis plus de 25 ans
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-2">50+</div>
              <p className="text-white/80 font-light">Modèles Exclusifs</p>
            </div>
            
            <div className="animate-slide-up delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-rose-400 mb-2">100%</div>
              <p className="text-white/80 font-light">Fait Main</p>
            </div>
            
            <div className="animate-slide-up delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">25</div>
              <p className="text-white/80 font-light">Années d'Expertise</p>
            </div>
            
            <div className="animate-slide-up delay-400">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">500+</div>
              <p className="text-white/80 font-light">Clientes Heureuses</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-3 mb-8 px-6 py-3 bg-gradient-to-r from-amber-50 to-rose-50 rounded-full border border-amber-200/50">
              <Crown className="w-5 h-5 text-amber-500" />
              <span className="text-amber-700 font-medium tracking-wider text-sm uppercase">Sur-Mesure</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-amber-700 to-rose-700 bg-clip-text text-transparent">
              Créez Votre Caftan Sur-Mesure
            </h2>
            
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Nos maîtres artisans peuvent créer le caftan de vos rêves, entièrement personnalisé 
              selon vos goûts et votre morphologie. Une expérience unique pour une pièce unique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white px-8 sm:px-12 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform">
                <span className="relative z-10 flex items-center justify-center">
                  <Crown className="w-5 h-5 mr-3" />
                  Consultation Sur-Mesure
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="border-2 border-slate-700 text-slate-700 px-8 sm:px-12 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-slate-700 hover:text-white transition-all duration-300">
                Prendre Rendez-vous
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Styles CSS pour les animations */}
      <style>{`
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
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.1); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 4s;
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
        
        .delay-400 {
          animation-delay: 400ms;
        }
        
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default CollectionPage;