import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Clock, Crown, Send, Star, Calendar, Users, Award, Sparkles } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      id: 'sur-mesure',
      name: 'Création Sur-Mesure',
      icon: Crown,
      description: 'Caftan unique conçu selon vos désirs',
      duration: '4-6 semaines',
      price: 'À partir de 890€'
    },
    {
      id: 'essayage',
      name: 'Rendez-vous Essayage',
      icon: Calendar,
      description: 'Séance privée dans notre showroom',
      duration: '1 heure',
      price: 'Gratuit'
    },
    {
      id: 'consultation',
      name: 'Consultation Style',
      icon: Star,
      description: 'Conseils personnalisés avec nos stylistes',
      duration: '30 minutes',
      price: '50€'
    },
    {
      id: 'retouches',
      name: 'Retouches',
      icon: Award,
      description: 'Ajustements et modifications',
      duration: '1-2 semaines',
      price: 'Sur devis'
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      primary: 'Cafior-83@gmail.com@',
      secondary: 'ikramRadouani2@gmail.com',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      primary: '+33 6 65 71 77 35',
      secondary: '+33 6 65 71 77 35',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      primary: '+33 6 65 71 77 35',
      secondary: 'Réponse rapide garantie',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'Showroom',
      primary: 'Toulon 83000, France ',
      secondary: 'Fez, Maroc',
      color: 'from-rose-400 to-pink-500'
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', color: 'from-pink-500 to-purple-600' },
    { icon: Facebook, href: '#', color: 'from-blue-600 to-blue-800' },
    { icon: MessageCircle, href: '#', color: 'from-green-500 to-green-600' }
  ];

  const openingHours = [
    { day: 'Lundi - Vendredi', hours: '10h00 - 19h00' },
    { day: 'Samedi', hours: '10h00 - 18h00' },
    { day: 'Dimanche', hours: 'Sur rendez-vous' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Reset form ou afficher message de succès
    }, 2000);
  };

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
            src="https://i.ibb.co/0VJ62J2N/acceuil-3.jpg"
            alt="Showroom élégant"
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
                  Service Royal
                </span>
                <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-amber-100 to-rose-100 bg-clip-text text-transparent">
                  Contactez-Nous
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
                Votre rêve de caftan royal commence par une conversation. 
                Nous sommes là pour vous accompagner dans chaque étape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
                  <Send className="w-8 h-8 text-amber-500 mr-4" />
                  Demande de Contact
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:border-slate-300"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:border-slate-300"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:border-slate-300"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                        Service Souhaité *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:border-slate-300"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map(service => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 hover:border-slate-300 resize-none"
                      placeholder="Décrivez-nous votre projet, vos préférences, ou toute question que vous pourriez avoir..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                      isSubmitting 
                        ? 'bg-slate-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:shadow-xl hover:shadow-amber-500/25 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer la Demande
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up delay-200 space-y-8">
              {/* Contact Methods */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <Star className="w-6 h-6 text-amber-500 mr-3" />
                  Informations de Contact
                </h3>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={index} className="flex items-start group">
                        <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-1">{method.title}</h4>
                          <p className="text-slate-600 font-medium">{method.primary}</p>
                          <p className="text-slate-500 text-sm">{method.secondary}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-amber-400 mr-3" />
                  Horaires d'Ouverture
                </h3>
                
                <div className="space-y-4">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-amber-300 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-amber-500/20 rounded-lg border border-amber-400/30">
                  <p className="text-sm text-amber-200 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    💫 Consultations privées disponibles en dehors des horaires d'ouverture
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Suivez-Nous</h3>
                
                <div className="flex gap-4 mb-6">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={index}
                        href={social.href} 
                        className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110 group`}
                      >
                        <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    );
                  })}
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  Découvrez nos dernières créations et les coulisses de notre atelier. 
                  Rejoignez notre communauté de passionnées de mode orientale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
              Services Royaux
            </h2>
            <p className="text-xl text-white/80 font-light animate-slide-up">
              Une expérience personnalisée pour chaque cliente
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isVisible ? 'slideUp 0.8s ease-out forwards' : 'none'
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center">
                    {service.name}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed text-center mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 text-center">
                    <div className="text-amber-300 font-semibold text-sm">
                      ⏱️ {service.duration}
                    </div>
                    <div className="text-white font-bold">
                      {service.price}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-amber-700 to-rose-700 bg-clip-text text-transparent">
              Témoignages Clients
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              L'expérience de nos clientes au cœur de notre engagement qualité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                service: "Caftan Sur-Mesure",
                rating: 5,
                comment: "Un service exceptionnel ! Mon caftan de mariage était absolument parfait. L'équipe a su comprendre mes attentes et les dépasser."
              },
              {
                name: "Amina K.",
                service: "Consultation Style",
                rating: 5,
                comment: "Les conseils de style ont transformé ma garde-robe. Je me sens maintenant élégante et confiante dans chaque tenue."
              },
              {
                name: "Leila B.",
                service: "Collection Prêt-à-Porter",
                rating: 5,
                comment: "La qualité des tissus et des finitions est remarquable. Chaque pièce est un véritable investissement dans l'élégance."
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-500"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animation: isVisible ? 'slideUp 0.8s ease-out forwards' : 'none'
                }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-current' : 'text-slate-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-slate-600 mb-4 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-amber-600">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-3 mb-8 px-6 py-3 bg-gradient-to-r from-amber-50 to-rose-50 rounded-full border border-amber-200/50">
              <Crown className="w-5 h-5 text-amber-500" />
              <span className="text-amber-700 font-medium tracking-wider text-sm uppercase">Prêt à Commencer ?</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-amber-700 to-rose-700 bg-clip-text text-transparent animate-fade-in">
              Prêt à Créer Votre Caftan de Rêve ?
            </h2>
            
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Notre équipe d'experts vous attend pour transformer votre vision en réalité. 
              Contactez-nous dès aujourd'hui pour commencer votre voyage vers l'élégance royale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white px-8 sm:px-12 py-4 rounded-full font-semibold text-sm sm:text-base tracking-wide transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform">
                <span className="relative z-10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-3" />
                  Prendre Rendez-vous
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="border-2 border-slate-700 text-slate-700 px-8 sm:px-12 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-slate-700 hover:text-white transition-all duration-300">
                Demande Sur-Mesure
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
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;