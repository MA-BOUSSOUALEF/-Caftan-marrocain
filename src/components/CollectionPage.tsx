import React, { useState } from 'react';
import { Crown, Filter, Heart, Star, Eye, ShoppingBag } from 'lucide-react';

const CollectionPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('all');

  const caftans = [
    {
      id: 1,
      name: "Caftan Amira",
      style: "moderne",
      color: "bordeaux",
      occasion: "soiree",
      price: "À partir de 890€",
      image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Caftan moderne en velours bordeaux avec broderies dorées Maalam",
      details: "Broderies main • Velours noble • Coupe moderne"
    },
    {
      id: 2,
      name: "Caftan Sultane",
      style: "traditionnel",
      color: "emeraude",
      occasion: "mariage",
      price: "À partir de 1290€",
      image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Caftan traditionnel en soie émeraude avec Sfifa authentique",
      details: "Sfifa traditionnelle • Soie pure • Coupe impériale"
    },
    {
      id: 3,
      name: "Caftan Princesse",
      style: "moderne",
      color: "champagne",
      occasion: "casual",
      price: "À partir de 650€",
      image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Caftan léger en mousseline champagne pour le quotidien chic",
      details: "Mousseline fluide • Broderies discrètes • Confort royal"
    },
    {
      id: 4,
      name: "Caftan Jasmine",
      style: "contemporain",
      color: "ivoire",
      occasion: "soiree",
      price: "À partir de 750€",
      image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Caftan contemporain ivoire avec détails perlés délicats",
      details: "Perlage main • Coupe ajustée • Élégance moderne"
    },
    {
      id: 5,
      name: "Caftan Zahra",
      style: "traditionnel",
      color: "or",
      occasion: "mariage",
      price: "À partir de 1450€",
      image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Caftan de mariée en brocart doré avec Aakads précieux",
      details: "Brocart royal • Aakads authentiques • Pièce unique"
    },
    {
      id: 6,
      name: "Caftan Malika",
      style: "moderne",
      color: "bleu",
      occasion: "casual",
      price: "À partir de 580€",
      image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Caftan moderne bleu nuit avec motifs géométriques",
      details: "Motifs contemporains • Coupe fluide • Style urbain"
    }
  ];

  const filters = [
    { id: 'all', name: 'Toute la Collection', icon: Crown },
    { id: 'soiree', name: 'Soirée', icon: Star },
    { id: 'mariage', name: 'Mariage', icon: Heart },
    { id: 'casual', name: 'Quotidien Chic', icon: ShoppingBag }
  ];

  const styles = [
    { id: 'all', name: 'Tous les Styles' },
    { id: 'traditionnel', name: 'Traditionnel' },
    { id: 'moderne', name: 'Moderne' },
    { id: 'contemporain', name: 'Contemporain' }
  ];

  const colors = [
    { id: 'all', name: 'Toutes les Couleurs' },
    { id: 'bordeaux', name: 'Bordeaux Royal' },
    { id: 'emeraude', name: 'Vert Émeraude' },
    { id: 'champagne', name: 'Champagne' },
    { id: 'ivoire', name: 'Ivoire' },
    { id: 'or', name: 'Or Antique' },
    { id: 'bleu', name: 'Bleu Nuit' }
  ];

  const filteredCaftans = caftans.filter(caftan => {
    const matchesFilter = selectedFilter === 'all' || caftan.occasion === selectedFilter;
    const matchesStyle = selectedStyle === 'all' || caftan.style === selectedStyle;
    return matchesFilter && matchesStyle;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-beige-rose to-champagne">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Crown className="w-16 h-16 text-antique-gold animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-8 animate-fade-in">
            Prêt-à-Porter Royal
          </h1>
          <p className="text-xl md:text-2xl text-deep-burgundy font-light leading-relaxed animate-slide-up">
            Découvrez notre collection de caftans d'exception, prêts à sublimer votre élégance
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          {/* Occasion Filters */}
          <div className="mb-8">
            <h3 className="text-lg font-serif text-charcoal mb-4 flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filtrer par Occasion
            </h3>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => {
                const IconComponent = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                      selectedFilter === filter.id
                        ? 'bg-gradient-to-r from-antique-gold to-champagne text-charcoal shadow-lg'
                        : 'bg-white/80 text-charcoal hover:bg-white hover:shadow-md'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {filter.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Style Filters */}
          <div className="mb-8">
            <h3 className="text-lg font-serif text-charcoal mb-4">Style</h3>
            <div className="flex flex-wrap gap-3">
              {styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedStyle === style.id
                      ? 'bg-deep-burgundy text-ivory'
                      : 'bg-white/80 text-charcoal hover:bg-white hover:shadow-md'
                  }`}
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Collection Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaftans.map((caftan, index) => (
              <div 
                key={caftan.id}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={caftan.image}
                    alt={caftan.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors transform hover:scale-110">
                        <Eye className="w-5 h-5 text-charcoal" />
                      </button>
                      <button className="bg-antique-gold/90 backdrop-blur-sm p-3 rounded-full hover:bg-antique-gold transition-colors transform hover:scale-110">
                        <Heart className="w-5 h-5 text-charcoal" />
                      </button>
                    </div>
                  </div>

                  {/* Style Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-deep-burgundy to-midnight-blue text-ivory px-3 py-1 rounded-full text-sm font-medium">
                      {caftan.style.charAt(0).toUpperCase() + caftan.style.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-charcoal mb-2 group-hover:text-deep-burgundy transition-colors">
                    {caftan.name}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                    {caftan.description}
                  </p>
                  
                  <div className="mb-4 p-3 bg-gradient-to-r from-champagne/30 to-antique-gold/20 rounded-lg">
                    <p className="text-sm text-deep-burgundy font-medium">
                      ✨ {caftan.details}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-semibold text-antique-gold">
                      {caftan.price}
                    </span>
                    <div className="flex items-center text-sm text-charcoal/60">
                      <Star className="w-4 h-4 mr-1 text-antique-gold" />
                      Pièce d'Exception
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-deep-burgundy to-midnight-blue text-ivory py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Voir Détails
                    </button>
                    <button className="px-4 py-3 border-2 border-antique-gold text-antique-gold rounded-full hover:bg-antique-gold hover:text-charcoal transition-all duration-300">
                      Essayage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collection Stats */}
      <div className="py-16 bg-gradient-to-r from-emerald-green to-deep-burgundy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl font-serif text-antique-gold mb-2">50+</div>
              <p className="text-ivory font-light">Modèles Exclusifs</p>
            </div>
            <div className="animate-slide-up delay-200">
              <div className="text-4xl font-serif text-antique-gold mb-2">100%</div>
              <p className="text-ivory font-light">Fait Main</p>
            </div>
            <div className="animate-slide-up delay-300">
              <div className="text-4xl font-serif text-antique-gold mb-2">25</div>
              <p className="text-ivory font-light">Années d'Expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-charcoal mb-8 animate-fade-in">
            Créez Votre Caftan Sur-Mesure
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
            Nos maîtres artisans peuvent créer le caftan de vos rêves, entièrement personnalisé selon vos goûts et votre morphologie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-antique-gold to-champagne text-charcoal px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Consultation Sur-Mesure
            </button>
            <button className="border-2 border-deep-burgundy text-deep-burgundy px-8 py-4 rounded-full font-semibold hover:bg-deep-burgundy hover:text-ivory transition-all duration-300">
              Prendre Rendez-vous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;