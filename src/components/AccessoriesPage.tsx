import React, { useState, useEffect } from 'react';
import { Crown, Heart, Star, ShoppingBag, Eye, Sparkles, Zap, Award, Gem } from 'lucide-react';

const AccessoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const accessories = [
    {
      id: 1,
      name: "Ceinture Mdamma Royale",
      category: "ceintures",
      price: "À partir de 280€",
      originalPrice: "350€",
      image: "https://i.ibb.co/fYTD2yKD/CCESOIRE-1.jpg",
      description: "Ceinture traditionnelle en fil d'or avec motifs géométriques",
      pairedWith: "Caftan Amira",
      badge: "Bestseller",
      rating: 5,
      inStock: true
    },
    {
      id: 2,
      name: "Collier Berbère Précieux",
      category: "bijoux",
      price: "À partir de 48€",
      originalPrice: "60€",
      image: "https://i.ibb.co/nqtYj5rk/accessoire-6.jpg",
      description: "Collier en argent massif avec pierres semi-précieuses",
      pairedWith: "Caftan Sultane",
      badge: "Premium",
      rating: 5,
      inStock: true
    },
    {
      id: 3,
      name: "Sac Brodé Impérial",
      category: "sacs",
      price: "À partir de 32€",
      originalPrice: "40€",
      image: "https://i.ibb.co/YThzQBf5/ACCESOIRE-4.jpg",
      description: "Sac en cuir noble avec broderies dorées à la main",
      pairedWith: "Caftan Princesse",
      badge: "Nouveau",
      rating: 4,
      inStock: true
    },
    {
      id: 4,
      name: "Babouches de Luxe",
      category: "chaussures",
      price: "À partir de 40€",
      originalPrice: "50€",
      image: "https://i.ibb.co/F4T7vBWG/accesoire-5.jpg",
      description: "Babouches en cuir souple avec ornements dorés",
      pairedWith: "Caftan Jasmine",
      badge: "Tendance",
      rating: 5,
      inStock: false
    },
    {
      id: 5,
      name: "Boucles d'Oreilles Orientales",
      category: "bijoux",
      price: "À partir de 40€",
      originalPrice: "60€",
      image: "https://i.ibb.co/NdQg8km5/accesoire-3.jpg",
      description: "Boucles en or 18 carats avec motifs arabesques",
      pairedWith: "Caftan Zahra",
      badge: "Exclusif",
      rating: 5,
      inStock: true
    },
    {
      id: 6,
      name: "Châle Cachemire Royal",
      category: "accessoires",
      price: "À partir de 96€",
      originalPrice: "120€",
      image: "https://i.ibb.co/79nbhxc/accesoire-9.jpg",
      description: "Châle en cachemire avec broderies perlées",
      pairedWith: "Caftan Malika",
      badge: "Luxe",
      rating: 5,
      inStock: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les Accessoires', icon: Crown, count: accessories.length },
    { id: 'bijoux', name: 'Bijoux Orientaux', icon: Star, count: accessories.filter(a => a.category === 'bijoux').length },
    { id: 'ceintures', name: 'Ceintures Mdamma', icon: Heart, count: accessories.filter(a => a.category === 'ceintures').length },
    { id: 'sacs', name: 'Sacs Brodés', icon: ShoppingBag, count: accessories.filter(a => a.category === 'sacs').length },
    { id: 'chaussures', name: 'Babouches de Luxe', icon: Crown, count: accessories.filter(a => a.category === 'chaussures').length },
    { id: 'accessoires', name: 'Autres Accessoires', icon: Gem, count: accessories.filter(a => a.category === 'accessoires').length }
  ];

  const stylingTips = [
    {
      icon: Crown,
      title: 'Harmonie des Couleurs',
      description: 'Associez vos accessoires dorés avec des caftans aux tons chauds pour un look royal parfait.',
      color: 'from-amber-400 to-yellow-600'
    },
    {
      icon: Star,
      title: 'Équilibre des Volumes',
      description: 'Un caftan ample se marie parfaitement avec des accessoires délicats et raffinés.',
      color: 'from-purple-400 to-pink-600'
    },
    {
      icon: Heart,
      title: 'Signature Personnelle',
      description: 'Créez votre style unique en mélangeant tradition et modernité avec nos pièces d\'exception.',
      color: 'from-rose-400 to-red-600'
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Bestseller': return 'from-amber-500 to-orange-500';
      case 'Premium': return 'from-purple-500 to-indigo-600';
      case 'Nouveau': return 'from-green-500 to-emerald-600';
      case 'Tendance': return 'from-pink-500 to-rose-600';
      case 'Exclusif': return 'from-gold-500 to-yellow-600';
      case 'Luxe': return 'from-indigo-500 to-purple-600';
      default: return 'from-slate-500 to-gray-600';
    }
  };

  const filteredAccessories = selectedCategory === 'all' 
    ? accessories 
    : accessories.filter(item => item.category === selectedCategory);

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
            src="https://i.ibb.co/YThzQBf5/ACCESOIRE-4.jpg"
            alt="Accessoires de luxe"
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
                <Star className="w-5 h-5 text-amber-400 animate-pulse" />
                <span className="text-amber-200 font-light tracking-wider text-sm uppercase">
                  Accessoires de Prestige
                </span>
                <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-amber-100 to-rose-100 bg-clip-text text-transparent">
                  Accessoires de Prestige
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
                Complétez votre look royal avec nos pièces d'exception, 
                créées par nos artisans pour sublimer chaque caftan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25'
                      : 'bg-white/80 text-slate-700 hover:bg-white hover:shadow-md border border-slate-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.name}
                  <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                    selectedCategory === category.id ? 'bg-white/20' : 'bg-slate-100'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accessories Grid */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filteredAccessories.map((accessory, index) => (
              <div 
                key={accessory.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-slate-100"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? 'slideUp 0.8s ease-out forwards' : 'none'
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
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

                  {/* Badge et Stock */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${getBadgeColor(accessory.badge)} text-white text-xs font-semibold rounded-full shadow-lg`}>
                      <Zap className="w-3 h-3 mr-1" />
                      {accessory.badge}
                    </span>
                  </div>

                  {/* Rating et Stock */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < accessory.rating ? 'text-amber-400 fill-current' : 'text-slate-300'}`} 
                        />
                      ))}
                    </div>
                    {!accessory.inStock && (
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Rupture
                      </div>
                    )}
                  </div>

                  {/* Discount Badge */}
                  {accessory.originalPrice && (
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        -20%
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                    {accessory.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-light">
                    {accessory.description}
                  </p>
                  
                  {accessory.pairedWith && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-amber-50 to-rose-50 rounded-lg border border-amber-100">
                      <p className="text-sm text-amber-700 font-medium flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-amber-500" />
                        💫 Porté avec le {accessory.pairedWith}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                        {accessory.price}
                      </span>
                      {accessory.originalPrice && (
                        <span className="text-sm text-slate-400 line-through">
                          {accessory.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-slate-500">
                      <Award className="w-4 h-4 mr-1 text-amber-500" />
                      Artisanal
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      className={`flex-1 py-3 px-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                        accessory.inStock 
                          ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-white hover:shadow-lg' 
                          : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                      }`}
                      disabled={!accessory.inStock}
                    >
                      {accessory.inStock ? 'Voir Détails' : 'Indisponible'}
                    </button>
                    <button 
                      className={`px-4 py-3 rounded-full font-semibold transition-all duration-300 ${
                        accessory.inStock 
                          ? 'border-2 border-amber-400 text-amber-600 hover:bg-amber-400 hover:text-white' 
                          : 'border-2 border-slate-300 text-slate-400 cursor-not-allowed'
                      }`}
                      disabled={!accessory.inStock}
                    >
                      {accessory.inStock ? '♡' : '✕'}
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

      {/* Styling Tips Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
              Conseils de Style Royal
            </h2>
            <p className="text-xl text-white/80 font-light animate-slide-up">
              L'art de porter les accessoires orientaux avec élégance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {stylingTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div 
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${tip.color} rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tip.title}</h3>
                  <p className="text-white/80 leading-relaxed font-light">
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 sm:p-12 border border-amber-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-amber-700 to-rose-700 bg-clip-text text-transparent">
                Restez Informée des Nouveautés
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 font-light">
                Soyez la première à découvrir nos nouveaux accessoires et bénéficiez d'offres exclusives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-3 bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-amber-700 to-rose-700 bg-clip-text text-transparent animate-fade-in">
              Créez Votre Look Royal Complet
            </h2>
            
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Nos stylistes peuvent vous conseiller pour créer l'harmonie parfaite entre votre caftan et vos accessoires.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white px-8 sm:px-12 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform">
                <span className="relative z-10 flex items-center justify-center">
                  <Crown className="w-5 h-5 mr-3" />
                  Consultation Personnalisée
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="border-2 border-slate-700 text-slate-700 px-8 sm:px-12 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-slate-700 hover:text-white transition-all duration-300">
                Voir Nos Caftans
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
        
        .animate-fade-in {
          animation: slideUp 1s ease-out forwards;
        }
        
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default AccessoriesPage;