import React, { useState } from 'react';
import { Crown, Heart, Star, ShoppingBag, Eye } from 'lucide-react';

const AccessoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const accessories = [
    {
      id: 1,
      name: "Ceinture Mdamma Royale",
      category: "ceintures",
      price: "À partir de 280€",
      image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Ceinture traditionnelle en fil d'or avec motifs géométriques",
      pairedWith: "Caftan Amira"
    },
    {
      id: 2,
      name: "Collier Berbère Précieux",
      category: "bijoux",
      price: "À partir de 450€",
      image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Collier en argent massif avec pierres semi-précieuses",
      pairedWith: "Caftan Sultane"
    },
    {
      id: 3,
      name: "Sac Brodé Impérial",
      category: "sacs",
      price: "À partir de 320€",
      image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Sac en cuir noble avec broderies dorées à la main",
      pairedWith: "Caftan Princesse"
    },
    {
      id: 4,
      name: "Babouches de Luxe",
      category: "chaussures",
      price: "À partir de 180€",
      image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Babouches en cuir souple avec ornements dorés",
      pairedWith: "Caftan Jasmine"
    },
    {
      id: 5,
      name: "Boucles d'Oreilles Orientales",
      category: "bijoux",
      price: "À partir de 220€",
      image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Boucles en or 18 carats avec motifs arabesques",
      pairedWith: "Caftan Zahra"
    },
    {
      id: 6,
      name: "Châle Cachemire Royal",
      category: "accessoires",
      price: "À partir de 380€",
      image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Châle en cachemire avec broderies perlées",
      princesse: "Caftan Malika"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les Accessoires', icon: Crown },
    { id: 'bijoux', name: 'Bijoux Orientaux', icon: Star },
    { id: 'ceintures', name: 'Ceintures Mdamma', icon: Heart },
    { id: 'sacs', name: 'Sacs Brodés', icon: ShoppingBag },
    { id: 'chaussures', name: 'Babouches de Luxe', icon: Crown },
    { id: 'accessoires', name: 'Autres Accessoires', icon: Star }
  ];

  const filteredAccessories = selectedCategory === 'all' 
    ? accessories 
    : accessories.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-champagne to-beige-rose">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Star className="w-16 h-16 text-antique-gold animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-8 animate-fade-in">
            Accessoires de Prestige
          </h1>
          <p className="text-xl md:text-2xl text-deep-burgundy font-light leading-relaxed animate-slide-up">
            Complétez votre look royal avec nos pièces d'exception
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-antique-gold to-champagne text-charcoal shadow-lg'
                      : 'bg-white/80 text-charcoal hover:bg-white hover:shadow-md'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Accessories Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccessories.map((accessory, index) => (
              <div 
                key={accessory.id}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Eye className="w-5 h-5 text-charcoal" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-deep-burgundy transition-colors">
                    {accessory.name}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                    {accessory.description}
                  </p>
                  
                  {accessory.pairedWith && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-champagne/30 to-antique-gold/20 rounded-lg">
                      <p className="text-sm text-deep-burgundy font-medium">
                        💫 Porté avec le {accessory.pairedWith}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-antique-gold">
                      {accessory.price}
                    </span>
                    <button className="bg-gradient-to-r from-deep-burgundy to-midnight-blue text-ivory px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Voir Détails
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styling Tips Section */}
      <div className="py-20 bg-gradient-to-r from-emerald-green to-deep-burgundy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-ivory mb-6 animate-fade-in">
              Conseils de Style Royal
            </h2>
            <p className="text-xl text-champagne font-light animate-slide-up">
              L'art de porter les accessoires orientaux avec élégance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-antique-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-serif text-ivory mb-4">Harmonie des Couleurs</h3>
              <p className="text-champagne leading-relaxed">
                Associez vos accessoires dorés avec des caftans aux tons chauds pour un look royal parfait.
              </p>
            </div>
            
            <div className="text-center animate-slide-up delay-200">
              <div className="w-16 h-16 bg-champagne rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-serif text-ivory mb-4">Équilibre des Volumes</h3>
              <p className="text-champagne leading-relaxed">
                Un caftan ample se marie parfaitement avec des accessoires délicats et raffinés.
              </p>
            </div>
            
            <div className="text-center animate-slide-up delay-300">
              <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-deep-burgundy" />
              </div>
              <h3 className="text-xl font-serif text-ivory mb-4">Signature Personnelle</h3>
              <p className="text-champagne leading-relaxed">
                Créez votre style unique en mélangeant tradition et modernité avec nos pièces d'exception.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-charcoal mb-8 animate-fade-in">
            Créez Votre Look Royal Complet
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-antique-gold to-champagne text-charcoal px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Consultation Personnalisée
            </button>
            <button className="border-2 border-deep-burgundy text-deep-burgundy px-8 py-4 rounded-full font-semibold hover:bg-deep-burgundy hover:text-ivory transition-all duration-300">
              Voir Nos Caftans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;