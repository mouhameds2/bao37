import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { useTranslation } from '@/lib/i18n.js';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const { t } = useTranslation();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    try {
      await pb.collection('email_signups').create({ email }, { $autoCancel: false });
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-card border-t border-border/10 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://horizons-cdn.hostinger.com/2fd5e192-bba6-4986-a526-f52a113c775f/825872637d7c367861e42593baa6ab67.jpg" 
                alt="BAO Club Logo" 
                className="h-12 w-12 rounded-full object-cover border border-primary"
              />
              <span className="font-serif text-2xl font-bold tracking-wider text-foreground">
                BAO CLUB
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">{t('footer.links')}</h4>
            <ul className="space-y-3">
              {[
                { name: t('nav.home'), path: '/' },
                { name: t('nav.menu'), path: '/menu' },
                { name: t('nav.events'), path: '/events' },
                { name: t('nav.reservations'), path: '/reservations' },
                { name: t('nav.contact'), path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Tours, France</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+33 2 47 00 00 00</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary shrink-0" />
                <span>contact@bao37.fr</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">{t('footer.newsletter.title')}</h4>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.newsletter.desc')}
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.newsletter.placeholder')}
                required
                className="w-full bg-background border border-border/20 rounded-lg py-3 pl-4 pr-12 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                <ArrowRight size={16} />
              </button>
            </form>
            {status === 'success' && <p className="text-xs text-green-500 mt-2">{t('footer.newsletter.success')}</p>}
            {status === 'error' && <p className="text-xs text-destructive mt-2">{t('footer.newsletter.error')}</p>}
          </div>

        </div>

        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</Link>
            <Link to="#" className="hover:text-primary transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}