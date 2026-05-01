import React from 'react';
import { Calendar, Clock, Users, XCircle } from 'lucide-react';
import { useTranslation } from '@/lib/i18n.js';

export default function ReservationCard({ reservation, onCancel }) {
  const { t, formatDate } = useTranslation();
  const isUpcoming = new Date(`${reservation.reservationDate}T${reservation.reservationTime}`) > new Date() && reservation.status !== 'cancelled';
  
  const statusColors = {
    pending: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
    confirmed: 'text-green-500 bg-green-500/10 border-green-500/20',
    completed: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    cancelled: 'text-red-500 bg-red-500/10 border-red-500/20',
  };

  const statusTranslations = {
    pending: 'En attente',
    confirmed: 'Confirmée',
    completed: 'Terminée',
    cancelled: 'Annulée'
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border/10 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <h4 className="text-lg font-serif font-medium text-foreground">{t('res.card.title')}</h4>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize ${statusColors[reservation.status] || statusColors.pending}`}>
            {statusTranslations[reservation.status] || reservation.status}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar size={16} className="text-primary" />
            {formatDate(reservation.reservationDate)}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-primary" />
            {reservation.reservationTime}
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={16} className="text-primary" />
            {reservation.partySize} {reservation.partySize > 1 ? t('res.form.guests') : t('res.form.guest')}
          </div>
        </div>
        
        {reservation.specialRequests && (
          <p className="text-sm text-muted-foreground italic">
            " {reservation.specialRequests} "
          </p>
        )}
      </div>

      {isUpcoming && (
        <button 
          onClick={() => onCancel(reservation.id)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors text-sm font-medium active:scale-[0.98]"
        >
          <XCircle size={16} />
          {t('res.card.cancel')}
        </button>
      )}
    </div>
  );
}