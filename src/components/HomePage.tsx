import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Crown, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [
    {
      url: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Héritage Royal',
      subtitle: 'L\'art du caftan marocain sublimé'
    },
    {
      url: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Broderies Maalam',
      subtitle: 'Savoir-faire ancestral d\'exception'
    },
    {
      url: 'https://images.pexels.com/photos/3586969/pexels-photo-3586969.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Créations Uniques',
      subtitle: 'Votre élégance sur-mesure'
    }
  ];

  const collections = [
    {
      name: 'Caftans Royaux',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Tradition et majesté'
    },
    {
      name: 'Prêt-à-Porter',
      image: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Élégance contemporaine'
    },
    {
      name: 'Accessoires',
      image: 'https://images.pexels.com/photos/3586969/pexels-photo-3586969.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Compléments raffinés'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-burgundy/30 to-charcoal/40"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className={`max-w-3xl text-ivory transform transition-all duration-1500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <div className="flex items-center space-x-3 mb-8">
                <Crown className="w-6 h-6 text-gold animate-pulse" />
                <span className="text-gold font-light tracking-[0.2em] text-sm uppercase">Excellence Artisanale</span>
                <div className="w-12 h-px bg-gold"></div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight tracking-wide">
                L'héritage
                <br />
                <span className="text-gold italic font-light">
                  marocain
                </span>
                <br />
                <span className="text-4xl md:text-5xl font-light">
                  sublimé par l'élégance couture
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 text-ivory/90 leading-relaxed font-light max-w-2xl">
                Chaque création raconte une histoire d'artisanat millénaire et de raffinement 
                contemporain, pour révéler la beauté authentique de la femme moderne.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                <button className="group relative overflow-hidden bg-gradient-to-r from-gold to-burgundy text-ivory px-12 py-4 text-sm font-light tracking-wide transition-all duration-500 hover:shadow-2xl hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    Découvrir la Collection
                    <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-burgundy to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                
                <button className="border-2 border-gold/60 text-ivory px-12 py-4 text-sm font-light tracking-wide hover:bg-gold/10 hover:border-gold transition-all duration-500 backdrop-blur-sm">
                  Prendre Rendez-vous
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-ivory/10 backdrop-blur-sm border border-gold/30 flex items-center justify-center hover:bg-gold/20 hover:border-gold transition-all duration-500 group"
        >
          <ChevronLeft className="w-6 h-6 text-ivory group-hover:text-gold transition-colors duration-300" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-ivory/10 backdrop-blur-sm border border-gold/30 flex items-center justify-center hover:bg-gold/20 hover:border-gold transition-all duration-500 group"
        >
          <ChevronRight className="w-6 h-6 text-ivory group-hover:text-gold transition-colors duration-300" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 border border-gold transition-all duration-500 ${
                index === currentSlide ? 'bg-gold scale-125' : 'bg-transparent hover:bg-gold/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-32 bg-gradient-to-b from-ivory to-beige/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-12">
              <div className="w-16 h-px bg-gold"></div>
              <Sparkles className="w-6 h-6 text-gold" />
              <div className="w-16 h-px bg-gold"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif mb-16 text-charcoal tracking-wide">
              Une Maison d'Exception
            </h2>
            
            <p className="text-2xl text-charcoal/80 mb-20 leading-relaxed font-light">
              Née d'une passion pour l'héritage marocain et la haute couture, notre maison 
              s'engage à sublimer la femme à travers des créations uniques qui célèbrent 
              l'art ancestral du caftan avec une sensibilité contemporaine.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-charcoal/70">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Crown className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif mb-4 text-charcoal">Artisanat Royal</h3>
                <p className="font-light leading-relaxed">Broderies Maalam, Sfifa et Aakads réalisées par nos maîtres artisans</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif mb-4 text-charcoal">Créations Sur-Mesure</h3>
                <p className="font-light leading-relaxed">Chaque pièce est unique et adaptée à votre morphologie et vos désirs</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-burgundy/20 border border-gold/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Star className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif mb-4 text-charcoal">Héritage Authentique</h3>
                <p className="font-light leading-relaxed">Transmission fidèle des techniques traditionnelles marocaines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-32 bg-gradient-to-br from-beige/20 to-ivory">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-serif mb-8 text-charcoal tracking-wide">
              Nos Collections
            </h2>
            <p className="text-2xl text-charcoal/80 max-w-3xl mx-auto font-light leading-relaxed">
              Découvrez l'excellence de notre savoir-faire à travers nos collections 
              qui célèbrent l'art du caftan marocain dans toute sa splendeur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-burgundy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                </div>
                
                <div className="absolute bottom-12 left-8 right-8 text-ivory transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="text-3xl font-serif mb-3 tracking-wide">{collection.name}</h3>
                  <p className="text-ivory/90 mb-6 font-light text-lg">{collection.description}</p>
                  <div className="flex items-center text-gold font-light">
                    <span>Découvrir</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-burgundy via-charcoal to-burgundy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-12">
              <div className="w-20 h-px bg-gold"></div>
              <Crown className="w-8 h-8 text-gold" />
              <div className="w-20 h-px bg-gold"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif mb-12 text-ivory tracking-wide">
              Créons Ensemble Votre Pièce Unique
            </h2>
            
            <p className="text-2xl mb-16 text-ivory/90 font-light leading-relaxed">
              Laissez-vous séduire par notre service sur-mesure et créez le caftan 
              de vos rêves avec nos maîtres artisans.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              <button className="group relative overflow-hidden bg-gradient-to-r from-gold to-burgundy text-ivory px-12 py-4 text-sm font-light tracking-wide transition-all duration-500 hover:shadow-2xl hover:scale-105">
                <span className="relative z-10">Prendre Rendez-vous</span>
                <div className="absolute inset-0 bg-gradient-to-r from-burgundy to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="border-2 border-gold text-ivory px-12 py-4 text-sm font-light tracking-wide hover:bg-gold/10 transition-all duration-500">
                Voir Nos Créations
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;