import React from 'react';
import { Sparkles, Heart, Crown, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-beige-rose to-champagne">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Crown className="w-16 h-16 text-antique-gold animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-8 animate-fade-in">
            Notre Histoire
          </h1>
          <p className="text-xl md:text-2xl text-deep-burgundy font-light leading-relaxed animate-slide-up">
            L'héritage marocain sublimé par l'élégance couture
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-slide-up">
                <h2 className="text-4xl font-serif text-charcoal mb-6 flex items-center">
                  <Heart className="w-8 h-8 text-deep-burgundy mr-4" />
                  L'Âme de la Marque
                </h2>
                <p className="text-lg text-charcoal leading-relaxed mb-6">
                  Née d'une passion pour l'héritage marocain et la haute couture, notre maison s'engage à sublimer la femme à travers des créations uniques qui racontent l'histoire millénaire du Caftan.
                </p>
                <p className="text-lg text-charcoal leading-relaxed">
                  Chaque pièce est le fruit d'un savoir-faire ancestral transmis de génération en génération, où l'art du Maalam rencontre l'innovation contemporaine.
                </p>
              </div>

              <div className="animate-slide-up delay-200">
                <h3 className="text-2xl font-serif text-deep-burgundy mb-4 flex items-center">
                  <Sparkles className="w-6 h-6 text-antique-gold mr-3" />
                  Savoir-Faire Traditionnel
                </h3>
                <ul className="space-y-3 text-charcoal">
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-antique-gold mr-3" />
                    Broderies Maalam authentiques
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-antique-gold mr-3" />
                    Sfifa traditionnelle tissée main
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-antique-gold mr-3" />
                    Aakads précieux et ornements royaux
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-antique-gold mr-3" />
                    Tissus nobles : soie, velours, mousseline
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-fade-in delay-300">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Atelier de couture traditionnel"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-16 bg-gradient-to-r from-deep-burgundy to-emerald-green">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <blockquote className="text-2xl md:text-3xl font-serif text-ivory leading-relaxed animate-fade-in">
            "Chaque Caftan que nous créons porte en lui l'âme du Maroc et l'élégance intemporelle. 
            C'est notre façon de perpétuer un héritage tout en écrivant l'avenir de la mode orientale."
          </blockquote>
          <cite className="block mt-8 text-lg text-champagne font-light">
            — Fondatrice de la Maison
          </cite>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-charcoal mb-16 animate-fade-in">
            Nos Valeurs Royales
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center animate-slide-up">
              <div className="w-20 h-20 bg-gradient-to-br from-antique-gold to-champagne rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-10 h-10 text-charcoal" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">Excellence</h3>
              <p className="text-charcoal leading-relaxed">
                Chaque détail est pensé pour atteindre la perfection, de la sélection des tissus à la finition des broderies.
              </p>
            </div>
            <div className="text-center animate-slide-up delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-deep-burgundy to-midnight-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-ivory" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">Authenticité</h3>
              <p className="text-charcoal leading-relaxed">
                Nous préservons et célébrons l'héritage artisanal marocain dans chacune de nos créations.
              </p>
            </div>
            <div className="text-center animate-slide-up delay-300">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-green to-antique-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-ivory" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">Innovation</h3>
              <p className="text-charcoal leading-relaxed">
                Nous réinventons la tradition en y apportant une touche contemporaine et moderne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;