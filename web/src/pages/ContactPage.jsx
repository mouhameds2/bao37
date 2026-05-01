import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useTranslation } from '@/lib/i18n.js';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">{t('contact.title')}</h1>
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-card p-8 rounded-2xl border border-border/10 shadow-lg">
              <h3 className="text-2xl font-serif font-medium text-foreground mb-6">{t('contact.info.title')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{t('home.cta.location.title')}</h4>
                    <p className="text-muted-foreground text-sm mt-1">Tours, France</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Téléphone</h4>
                    <p className="text-muted-foreground text-sm mt-1">+33 2 47 00 00 00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">E-mail</h4>
                    <p className="text-muted-foreground text-sm mt-1">contact@bao37.fr</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{t('home.cta.hours.title')}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{t('home.cta.hours.desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-2xl overflow-hidden border border-border/10 shadow-lg">
              <iframe 
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86948.40518011115!2d0.61525015!3d47.3815864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd5cb51b16ce1%3A0xdd1d2d2611111111!2sTours%2C%20France!5e0!3m2!1sen!2sus!4v1614230000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card p-8 md:p-10 rounded-2xl border border-border/10 shadow-lg"
          >
            <h3 className="text-2xl font-serif font-medium text-foreground mb-6">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-background border border-border/20 rounded-lg py-3 px-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-background border border-border/20 rounded-lg py-3 px-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="jean@exemple.fr"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">{t('contact.form.message')}</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-background border border-border/20 rounded-lg py-3 px-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? t('contact.form.sending') : (
                  <>
                    {t('contact.form.send')} <Send size={18} />
                  </>
                )}
              </button>
              {status === 'success' && (
                <p className="text-center text-green-500 text-sm mt-4">{t('contact.form.success')}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}