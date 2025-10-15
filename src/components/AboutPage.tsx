// import React from 'react';
// import { Sparkles, Heart, Crown, Star } from 'lucide-react';

// const AboutPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-ivory via-beige-rose to-champagne">
//       {/* Hero Section */}
//       <div className="relative py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="flex justify-center mb-8">
//             <Crown className="w-16 h-16 text-antique-gold animate-pulse" />
//           </div>
//           <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-8 animate-fade-in">
//             Notre Histoire
//           </h1>
//           <p className="text-xl md:text-2xl text-deep-burgundy font-light leading-relaxed animate-slide-up">
//             L'héritage marocain sublimé par l'élégance couture
//           </p>
//         </div>
//       </div>

//       {/* Story Section */}
//       <div className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <div className="animate-slide-up">
//                 <h2 className="text-4xl font-serif text-charcoal mb-6 flex items-center">
//                   <Heart className="w-8 h-8 text-deep-burgundy mr-4" />
//                   L'Âme de la Marque
//                 </h2>
//                 <p className="text-lg text-charcoal leading-relaxed mb-6">
//                   Née d'une passion pour l'héritage marocain et la haute couture, notre maison s'engage à sublimer la femme à travers des créations uniques qui racontent l'histoire millénaire du Caftan.
//                 </p>
//                 <p className="text-lg text-charcoal leading-relaxed">
//                   Chaque pièce est le fruit d'un savoir-faire ancestral transmis de génération en génération, où l'art du Maalam rencontre l'innovation contemporaine.
//                 </p>
//               </div>

//               <div className="animate-slide-up delay-200">
//                 <h3 className="text-2xl font-serif text-deep-burgundy mb-4 flex items-center">
//                   <Sparkles className="w-6 h-6 text-antique-gold mr-3" />
//                   Savoir-Faire Traditionnel
//                 </h3>
//                 <ul className="space-y-3 text-charcoal">
//                   <li className="flex items-center">
//                     <Star className="w-4 h-4 text-antique-gold mr-3" />
//                     Broderies Maalam authentiques
//                   </li>
//                   <li className="flex items-center">
//                     <Star className="w-4 h-4 text-antique-gold mr-3" />
//                     Sfifa traditionnelle tissée main
//                   </li>
//                   <li className="flex items-center">
//                     <Star className="w-4 h-4 text-antique-gold mr-3" />
//                     Aakads précieux et ornements royaux
//                   </li>
//                   <li className="flex items-center">
//                     <Star className="w-4 h-4 text-antique-gold mr-3" />
//                     Tissus nobles : soie, velours, mousseline
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="animate-fade-in delay-300">
//               <div className="relative">
//                 <img 
//                   src="https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800" 
//                   alt="Atelier de couture traditionnel"
//                   className="rounded-lg shadow-2xl w-full h-96 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-lg"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quote Section */}
//       <div className="py-16 bg-gradient-to-r from-deep-burgundy to-emerald-green">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <blockquote className="text-2xl md:text-3xl font-serif text-ivory leading-relaxed animate-fade-in">
//             "Chaque Caftan que nous créons porte en lui l'âme du Maroc et l'élégance intemporelle. 
//             C'est notre façon de perpétuer un héritage tout en écrivant l'avenir de la mode orientale."
//           </blockquote>
//           <cite className="block mt-8 text-lg text-champagne font-light">
//             — Fondatrice de la Maison
//           </cite>
//         </div>
//       </div>

//       {/* Values Section */}
//       <div className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-serif text-center text-charcoal mb-16 animate-fade-in">
//             Nos Valeurs Royales
//           </h2>
//           <div className="grid md:grid-cols-3 gap-12">
//             <div className="text-center animate-slide-up">
//               <div className="w-20 h-20 bg-gradient-to-br from-antique-gold to-champagne rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Crown className="w-10 h-10 text-charcoal" />
//               </div>
//               <h3 className="text-2xl font-serif text-charcoal mb-4">Excellence</h3>
//               <p className="text-charcoal leading-relaxed">
//                 Chaque détail est pensé pour atteindre la perfection, de la sélection des tissus à la finition des broderies.
//               </p>
//             </div>
//             <div className="text-center animate-slide-up delay-200">
//               <div className="w-20 h-20 bg-gradient-to-br from-deep-burgundy to-midnight-blue rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Heart className="w-10 h-10 text-ivory" />
//               </div>
//               <h3 className="text-2xl font-serif text-charcoal mb-4">Authenticité</h3>
//               <p className="text-charcoal leading-relaxed">
//                 Nous préservons et célébrons l'héritage artisanal marocain dans chacune de nos créations.
//               </p>
//             </div>
//             <div className="text-center animate-slide-up delay-300">
//               <div className="w-20 h-20 bg-gradient-to-br from-emerald-green to-antique-gold rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Sparkles className="w-10 h-10 text-ivory" />
//               </div>
//               <h3 className="text-2xl font-serif text-charcoal mb-4">Innovation</h3>
//               <p className="text-charcoal leading-relaxed">
//                 Nous réinventons la tradition en y apportant une touche contemporaine et moderne.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;
import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Crown, Star, Award, Users, Clock, Gem } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const values = [
    {
      icon: Crown,
      title: 'Excellence',
      description: 'Chaque détail est pensé pour atteindre la perfection, de la sélection des tissus à la finition des broderies.',
      color: 'from-amber-400 to-yellow-600',
      stats: '25+ ans'
    },
    {
      icon: Heart,
      title: 'Authenticité',
      description: 'Nous préservons et célébrons l\'héritage artisanal marocain dans chacune de nos créations.',
      color: 'from-rose-400 to-red-600',
      stats: '100% traditionnel'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Nous réinventons la tradition en y apportant une touche contemporaine et moderne.',
      color: 'from-purple-400 to-pink-600',
      stats: 'Design unique'
    }
  ];

  const achievements = [
    { icon: Award, number: '500+', label: 'Créations Uniques' },
    { icon: Users, number: '200+', label: 'Clientes Satisfaites' },
    { icon: Clock, number: '25', label: 'Années d\'Expérience' },
    { icon: Gem, number: '15', label: 'Maîtres Artisans' }
  ];

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
            src="https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Atelier traditionnel"
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
                  Héritage Millénaire
                </span>
                <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-amber-100 to-rose-100 bg-clip-text text-transparent">
                  Notre Histoire
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
                L'héritage marocain sublimé par l'élégance couture dans une tradition 
                d'excellence qui traverse les générations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Histoire avec animations */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-slide-up">
                <div className="inline-flex items-center space-x-3 mb-8 px-6 py-3 bg-gradient-to-r from-amber-50 to-rose-50 rounded-full border border-amber-200/50">
                  <Heart className="w-5 h-5 text-rose-500" />
                  <span className="text-rose-700 font-medium tracking-wider text-sm uppercase">L'Âme de la Marque</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-amber-700 to-rose-700 bg-clip-text text-transparent">
                  Une Passion Transmise
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-6 font-light">
                  Née d'une passion pour l'héritage marocain et la haute couture, notre maison s'engage à sublimer 
                  chaque femme à travers des créations uniques qui racontent l'histoire millénaire du Caftan.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Chaque pièce est le fruit d'un savoir-faire ancestral transmis de génération en génération, 
                  où l'art du Maalam rencontre l'innovation contemporaine.
                </p>
              </div>

              <div className="animate-slide-up delay-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 text-amber-500 mr-3" />
                  Savoir-Faire Traditionnel
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Broderies Maalam authentiques',
                    'Sfifa traditionnelle tissée main',
                    'Aakads précieux et ornements royaux',
                    'Tissus nobles : soie, velours, mousseline'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/80 rounded-lg shadow-sm">
                      <Star className="w-4 h-4 text-amber-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-fade-in delay-300">
              <div className="relative group">
                <img 
                  src="https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Atelier de couture traditionnel"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl group-hover:from-black/30 transition-all duration-500"></div>
                
                {/* Badge flottant */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-slate-800 text-sm font-semibold rounded-full shadow-lg">
                    <Crown className="w-4 h-4 mr-2 text-amber-500" />
                    Atelier Royal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section avec design moderne */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-relaxed animate-fade-in mb-8">
              "Chaque Caftan que nous créons porte en lui l'âme du Maroc et l'élégance intemporelle. 
              C'est notre façon de perpétuer un héritage tout en écrivant l'avenir de la mode orientale."
            </blockquote>
            
            <cite className="block text-lg text-amber-300 font-medium">
              — Fondatrice de la Maison
            </cite>
          </div>
        </div>
      </section>

      {/* Section Valeurs avec statistiques */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-amber-700 to-rose-700 bg-clip-text text-transparent">
              Nos Valeurs Royales
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Les principes qui guident chacune de nos créations depuis plus de 25 ans
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-slate-100"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animation: isVisible ? 'slideUp 0.8s ease-out forwards' : 'none'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 rounded-3xl"></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-amber-600 block">{value.stats}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-800 group-hover:text-amber-700 transition-colors duration-300 text-center">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light text-center">
                    {value.description}
                  </p>
                  
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-amber-200 transition-all duration-500"></div>
                </div>
              );
            })}
          </div>

          {/* Section Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={index}
                  className="text-center group"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isVisible ? 'slideUp 0.8s ease-out forwards' : 'none'
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">{achievement.number}</div>
                  <div className="text-slate-600 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;