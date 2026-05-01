import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { useTranslation } from '@/lib/i18n.js';

export default function EventCard({ event }) {
  const { t, formatCurrency, formatDateTime } = useTranslation();
  const imageUrl = event.image 
    ? pb.files.getUrl(event, event.image) 
    : 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800';

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-card rounded-2xl overflow-hidden border border-border/10 hover:border-primary/30 transition-all duration-300 shadow-lg flex flex-col md:flex-row"
    >
      <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30 text-primary text-sm font-medium">
          {event.ticketPrice ? formatCurrency(event.ticketPrice) : t('events.free_entry')}
        </div>
      </div>
      <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
        <h3 className="text-2xl font-serif font-medium text-foreground mb-4">{event.title}</h3>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-muted-foreground text-sm capitalize">
            <Calendar size={16} className="mr-3 text-primary" />
            {formatDateTime(event.eventDate)}
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock size={16} className="mr-3 text-primary" />
            {event.eventTime}
          </div>
          {event.location && (
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin size={16} className="mr-3 text-primary" />
              {event.location}
            </div>
          )}
        </div>
        
        <p className="text-muted-foreground text-sm mb-8 line-clamp-3">
          {event.description}
        </p>
        
        <div className="mt-auto">
          <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300 active:scale-[0.98]">
            {t('events.book_tickets')}
          </button>
        </div>
      </div>
    </motion.div>
  );
}