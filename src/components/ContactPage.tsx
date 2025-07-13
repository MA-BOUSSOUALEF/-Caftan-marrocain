import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Clock, Crown, Send, Star } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory via-champagne to-beige-rose">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Crown className="w-16 h-16 text-antique-gold animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-8 animate-fade-in">
            Contactez-Nous
          </h1>
          <p className="text-xl md:text-2xl text-deep-burgundy font-light leading-relaxed animate-slide-up">
            Votre rêve de caftan royal commence par une conversation
          </p>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-serif text-charcoal mb-8 flex items-center">
                  <Send className="w-8 h-8 text-antique-gold mr-4" />
                  Demande de Contact
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-champagne rounded-lg focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all duration-300 bg-white/80"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-champagne rounded-lg focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all duration-300 bg-white/80"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-champagne rounded-lg focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all duration-300 bg-white/80"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                        Service Souhaité *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-champagne rounded-lg focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all duration-300 bg-white/80"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="sur-mesure">Création Sur-Mesure</option>
                        <option value="essayage">Rendez-vous Essayage</option>
                        <option value="consultation">Consultation Style</option>
                        <option value="retouches">Retouches</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-champagne rounded-lg focus:ring-2 focus:ring-antique-gold focus:border-transparent transition-all duration-300 bg-white/80 resize-none"
                      placeholder="Décrivez-nous votre projet, vos préférences, ou toute question que vous pourriez avoir..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-antique-gold to-champagne text-charcoal py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer la Demande
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up delay-200">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-serif text-charcoal mb-6 flex items-center">
                    <Star className="w-6 h-6 text-antique-gold mr-3" />
                    Informations de Contact
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-antique-gold to-champagne rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-charcoal" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal mb-1">Email</h4>
                        <p className="text-charcoal/70">contact@caftanroyal.com</p>
                        <p className="text-charcoal/70">surmesure@caftanroyal.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-deep-burgundy to-midnight-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-ivory" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal mb-1">Téléphone</h4>
                        <p className="text-charcoal/70">+33 1 42 86 75 30</p>
                        <p className="text-charcoal/70">+33 6 12 34 56 78</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-green to-antique-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-ivory" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal mb-1">WhatsApp</h4>
                        <p className="text-charcoal/70">+33 6 12 34 56 78</p>
                        <p className="text-sm text-deep-burgundy">Réponse rapide garantie</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-champagne to-beige-rose rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-charcoal" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal mb-1">Showroom</h4>
                        <p className="text-charcoal/70">123 Rue de la Paix</p>
                        <p className="text-charcoal/70">75001 Paris, France</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-gradient-to-br from-deep-burgundy to-midnight-blue rounded-2xl p-8 text-ivory shadow-xl">
                  <h3 className="text-2xl font-serif mb-6 flex items-center">
                    <Clock className="w-6 h-6 text-antique-gold mr-3" />
                    Horaires d'Ouverture
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="text-champagne">10h00 - 19h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span className="text-champagne">10h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="text-champagne">Sur rendez-vous</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-antique-gold/20 rounded-lg">
                    <p className="text-sm text-champagne">
                      💫 Consultations privées disponibles en dehors des horaires d'ouverture
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-serif text-charcoal mb-6">Suivez-Nous</h3>
                  
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                    >
                      <MessageCircle className="w-6 h-6 text-white" />
                    </a>
                  </div>
                  
                  <p className="text-sm text-charcoal/70 mt-4">
                    Découvrez nos dernières créations et coulisses d'atelier
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gradient-to-r from-emerald-green to-deep-burgundy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-ivory mb-6 animate-fade-in">
              Services Royaux
            </h2>
            <p className="text-xl text-champagne font-light animate-slide-up">
              Une expérience personnalisée pour chaque cliente
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-antique-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-serif text-ivory mb-4">Sur-Mesure</h3>
              <p className="text-champagne text-sm leading-relaxed">
                Création entièrement personnalisée selon vos goûts et morphologie
              </p>
            </div>
            
            <div className="text-center animate-slide-up delay-200">
              <div className="w-16 h-16 bg-champagne rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-serif text-ivory mb-4">Consultation</h3>
              <p className="text-champagne text-sm leading-relaxed">
                Conseils personnalisés pour choisir le caftan parfait
              </p>
            </div>
            
            <div className="text-center animate-slide-up delay-300">
              <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-deep-burgundy" />
              </div>
              <h3 className="text-xl font-serif text-ivory mb-4">Essayage Privé</h3>
              <p className="text-champagne text-sm leading-relaxed">
                Séance d'essayage dans notre showroom exclusif
              </p>
            </div>
            
            <div className="text-center animate-slide-up delay-400">
              <div className="w-16 h-16 bg-deep-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-ivory" />
              </div>
              <h3 className="text-xl font-serif text-ivory mb-4">Livraison VIP</h3>
              <p className="text-champagne text-sm leading-relaxed">
                Service de livraison premium à domicile
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-charcoal mb-8 animate-fade-in">
            Prêt à Créer Votre Caftan de Rêve ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-antique-gold to-champagne text-charcoal px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Prendre Rendez-vous
            </button>
            <button className="border-2 border-deep-burgundy text-deep-burgundy px-8 py-4 rounded-full font-semibold hover:bg-deep-burgundy hover:text-ivory transition-all duration-300">
              Demande Sur-Mesure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;