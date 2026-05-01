import React from 'react';
import { motion } from 'framer-motion';
import { useEvents } from '@/hooks/useEvents.js';
import EventCard from '@/components/EventCard.jsx';
import LoadingSpinner from '@/components/LoadingSpinner.jsx';
import { useTranslation } from '@/lib/i18n.js';

export default function EventsPage() {
  const { events, loading, error } = useEvents();
  const { t } = useTranslation();

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center py-24 text-destructive">{t('common.error')}: {error}</div>;

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">{t('events.title')}</h1>
          <p className="text-lg text-muted-foreground">
            {t('events.subtitle')}
          </p>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-24 bg-card rounded-2xl border border-border/10">
            <h3 className="text-2xl font-serif text-foreground mb-2">{t('events.empty.title')}</h3>
            <p className="text-muted-foreground">{t('events.empty.desc')}</p>
          </div>
        ) : (
          <div className="space-y-8 max-w-5xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}