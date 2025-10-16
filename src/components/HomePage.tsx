import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Crown, Star, Gem, Heart, Zap, Eye } from 'lucide-react';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const heroImages = [
    {
      url: 'https://i.ibb.co/0VJ62J2N/acceuil-3.jpg',
      title: 'Héritage Royal',
      subtitle: 'L\'art du caftan marocain sublimé',
      accent: 'Tradition Millénaire'
    },
    {
      url: 'https://i.ibb.co/d0WRBKjb/acceuil-1.jpg',
      title: 'Broderies Maalam',
      subtitle: 'Savoir-faire ancestral d\'exception',
      accent: 'Fait Main'
    },
    {
      url: 'https://i.ibb.co/hRtMdbFJ/accesoire-2.jpg',
      title: 'Créations Uniques',
      subtitle: 'Votre élégance sur-mesure',
      accent: 'Exclusivité'
    }
  ];

  const collections = [
    {
      name: 'Caftans Royaux',
      image: 'https://i.ibb.co/nsjrhckJ/caftan-5.jpg',
      description: 'Tradition et majesté',
      price: 'À partir de 890€',
      badge: 'Signature'
    },
    {
      name: 'Prêt-à-Porter',
      image: 'https://i.ibb.co/B2kCq7qp/1.jpg',
      description: 'Élégance contemporaine',
      price: 'À partir de 650€',
      badge: 'Nouveau'
    },
    {
      name: 'Accessoires',
      image: 'https://i.ibb.co/YThzQBf5/ACCESOIRE-4.jpg',
      description: 'Compléments raffinés',
      price: 'À partir de 180€',
      badge: 'Tendance'
    }
  ];

  const features = [
    {
      icon: Crown,
      title: 'Artisanat Royal',
      description: 'Broderies Maalam, Sfifa et Aakads réalisées par nos maîtres artisans',
      color: 'from-amber-400 to-yellow-600'
    },
    {
      icon: Gem,
      title: 'Créations Sur-Mesure',
      description: 'Chaque pièce est unique et adaptée à votre morphologie et vos désirs',
      color: 'from-purple-400 to-pink-600'
    },
    {
      icon: Heart,
      title: 'Héritage Authentique',
      description: 'Transmission fidèle des techniques traditionnelles marocaines',
      color: 'from-rose-400 to-red-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 overflow-hidden">
      {/* Hero Section avec Parallax */}
      <section className="relative h-screen overflow-hidden">
        {/* Background avec effet de parallax */}
        <div 
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Gradient overlay moderne */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-800/30 to-rose-900/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-rose-400/40 rounded-full animate-float-delay"></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-purple-400/20 rounded-full animate-float-slow"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`max-w-4xl mx-auto text-center text-white transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              {/* Badge animé */}
              <div className="inline-flex items-center space-x-2 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                <span className="text-amber-200 font-light tracking-wider text-sm uppercase">
                  {heroImages[currentSlide].accent}
                </span>
                <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-amber-100 to-rose-100 bg-clip-text text-transparent">
                  {heroImages[currentSlide].title}
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 block mt-4">
                  {heroImages[currentSlide].subtitle}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl mb-12 text-white/80 leading-relaxed font-light max-w-2xl mx-auto">
                Chaque création raconte une histoire d'artisanat millénaire et de raffinement 
                contemporain, pour révéler votre beauté authentique.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white px-8 sm:px-12 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform">
                  <span className="relative z-10 flex items-center justify-center">
                    Découvrir la Collection
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                
                <button className="relative border-2 border-white/30 text-white px-8 sm:px-12 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-500 backdrop-blur-sm hover:shadow-lg group">
                  <span className="relative z-10">Prendre Rendez-vous</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation moderne */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-500 group z-20"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-amber-300 transition-colors duration-300" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-500 group z-20"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-amber-300 transition-colors duration-300" />
        </button>

        {/* Indicateurs élégants */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-white' 
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
              }`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Section Caractéristiques avec animations */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* Motifs décoratifs */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center space-x-3 mb-8 px-6 py-3 bg-gradient-to-r from-amber-50 to-rose-50 rounded-full border border-amber-200/50">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-amber-700 font-medium tracking-wider text-sm uppercase">Excellence Artisanale</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-amber-700 to-rose-700 bg-clip-text text-transparent leading-tight">
              Une Maison d'Exception
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Née d'une passion pour l'héritage marocain et la haute couture, notre maison 
              s'engage à sublimer chaque femme à travers des créations uniques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-slate-100"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animation: isVisible ? 'slideUp 0.8s ease-out forwards' : 'none'
                  }}
                >
                  {/* Effet de brillance au survol */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 rounded-3xl"></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-800 group-hover:text-amber-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                  
                  {/* Bordure animée */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-amber-200 transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collections avec design moderne */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-rose-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-amber-700 to-rose-700 bg-clip-text text-transparent leading-tight">
              Nos Collections
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Découvrez l'excellence de notre savoir-faire à travers nos collections 
              qui célèbrent l'art du caftan marocain dans toute sa splendeur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-700 hover:scale-105"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: isVisible ? 'slideUp 0.8s ease-out forwards' : 'none'
                }}
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-80 sm:h-96 lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient overlay moderne */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                  
                  {/* Badge flottant */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-slate-800 text-sm font-semibold rounded-full shadow-lg">
                      <Zap className="w-4 h-4 mr-2 text-amber-500" />
                      {collection.badge}
                    </span>
                  </div>
                  
                  {/* Contenu */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-wide">
                      {collection.name}
                    </h3>
                    <p className="text-white/90 mb-4 font-light text-lg">
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-300 font-semibold text-lg">
                        {collection.price}
                      </span>
                      <div className="flex items-center text-white/80 group-hover:text-amber-300 transition-colors duration-300">
                        <span className="mr-3 font-medium">Découvrir</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Particules d'arrière-plan */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <Crown className="w-5 h-5 text-amber-400" />
              <span className="text-amber-200 font-medium tracking-wider text-sm uppercase">Création Sur-Mesure</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              Créons Ensemble Votre
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Pièce Unique
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-12 text-white/80 font-light leading-relaxed max-w-3xl mx-auto">
              Laissez-vous séduire par notre service sur-mesure et créez le caftan 
              de vos rêves avec nos maîtres artisans.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white px-8 sm:px-12 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform">
                <span className="relative z-10 flex items-center justify-center">
                  <Crown className="w-5 h-5 mr-3" />
                  Prendre Rendez-vous
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="relative border-2 border-white/30 text-white px-8 sm:px-12 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-500 backdrop-blur-sm group">
                <span className="relative z-10 flex items-center justify-center">
                  <Eye className="w-5 h-5 mr-3" />
                  Voir Nos Créations
                </span>
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
        
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default HomePage;