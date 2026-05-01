import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import { useTranslation } from '@/lib/i18n.js';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580196515879-2d99ad7fd767?auto=format&fit=crop&q=80&w=2000" 
            alt="BAO Club Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-6 block">
              {t('home.hero.subtitle')}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-8 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              {t('home.hero.title')} <br/>
              <span className="text-3xl md:text-5xl lg:text-6xl text-foreground/80 font-light italic">{t('home.hero.title_suffix')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('home.hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/reservations" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                {t('home.hero.book')}
              </Link>
              <Link 
                to="/menu" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-medium text-lg hover:bg-secondary/80 transition-all border border-border/20 hover:border-primary/50"
              >
                {t('home.hero.explore')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section (Zig-Zag) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
                  alt="Culinary Experience" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-card p-8 rounded-2xl border border-border/10 shadow-xl hidden md:block max-w-xs">
                <Star className="text-primary mb-4" size={32} />
                <p className="text-foreground font-serif text-xl italic">{t('home.about.quote')}</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">{t('home.about.title')}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t('home.about.p1')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t('home.about.p2')}
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all">
                {t('home.about.link')} <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card border-y border-border/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">{t('home.features.title')}</h2>
            <p className="text-muted-foreground">{t('home.features.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('home.features.f1.title'),
                desc: t('home.features.f1.desc'),
                icon: "🍽️"
              },
              {
                title: t('home.features.f2.title'),
                desc: t('home.features.f2.desc'),
                icon: "🌿"
              },
              {
                title: t('home.features.f3.title'),
                desc: t('home.features.f3.desc'),
                icon: "🎵"
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border/10 hover:border-primary/30 transition-colors group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                <h3 className="text-xl font-serif font-medium text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info CTA */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-secondary rounded-3xl p-8 md:p-16 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">{t('home.cta.title')}</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Clock className="text-primary" size={24} />
                  <div>
                    <p className="font-medium text-foreground">{t('home.cta.hours.title')}</p>
                    <p>{t('home.cta.hours.desc')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="text-primary" size={24} />
                  <div>
                    <p className="font-medium text-foreground">{t('home.cta.location.title')}</p>
                    <p>{t('home.cta.location.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-4">
              <Link 
                to="/reservations" 
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium text-center text-lg hover:bg-primary/90 transition-colors"
              >
                {t('home.cta.book')}
              </Link>
              <Link 
                to="/contact" 
                className="w-full py-4 rounded-xl bg-transparent border border-border/30 text-foreground font-medium text-center text-lg hover:border-primary/50 transition-colors"
              >
                {t('home.cta.directions')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}