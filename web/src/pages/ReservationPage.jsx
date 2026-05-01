import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useReservations } from '@/hooks/useReservations.js';
import ReservationCard from '@/components/ReservationCard.jsx';
import LoadingSpinner from '@/components/LoadingSpinner.jsx';
import pb from '@/lib/pocketbaseClient';
import { useTranslation } from '@/lib/i18n.js';

export default function ReservationPage() {
  const { currentUser } = useAuth();
  const { reservations, loading, createReservation, cancelReservation } = useReservations(currentUser?.id);
  const [tables, setTables] = useState([]);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const { t } = useTranslation();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      customerName: currentUser?.name || '',
      customerEmail: currentUser?.email || '',
      customerPhone: currentUser?.phone || '',
      partySize: 2,
      reservationDate: '',
      reservationTime: '19:00',
      specialRequests: ''
    }
  });

  useEffect(() => {
    pb.collection('tables').getFullList({ filter: 'isActive = true', $autoCancel: false })
      .then(setTables)
      .catch(console.error);
  }, []);

  const onSubmit = async (data) => {
    setSubmitStatus('loading');
    setErrorMsg('');
    try {
      const suitableTable = tables.find(t => t.capacity >= data.partySize);
      if (!suitableTable) {
        throw new Error("Aucune table disponible pour ce nombre de personnes.");
      }

      await createReservation({
        ...data,
        customerId: currentUser.id,
        tableId: suitableTable.id,
        status: 'pending'
      });
      
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || "Échec de la création de la réservation.");
      setSubmitStatus('error');
    }
  };

  if (loading) return <LoadingSpinner />;

  const upcoming = reservations.filter(r => new Date(`${r.reservationDate}T${r.reservationTime}`) > new Date() && r.status !== 'cancelled');
  const past = reservations.filter(r => new Date(`${r.reservationDate}T${r.reservationTime}`) <= new Date() || r.status === 'cancelled');

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">{t('res.title')}</h1>
          <p className="text-lg text-muted-foreground">{t('res.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-5">
            <div className="bg-card p-8 rounded-2xl border border-border/10 shadow-lg sticky top-32">
              <h3 className="text-2xl font-serif font-medium text-foreground mb-6">{t('res.form.title')}</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t('res.form.date')}</label>
                    <input 
                      type="date" 
                      min={new Date().toISOString().split('T')[0]}
                      {...register('reservationDate', { required: 'La date est requise' })}
                      className="w-full bg-background border border-border/20 rounded-lg py-2.5 px-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    {errors.reservationDate && <p className="text-xs text-destructive mt-1">{errors.reservationDate.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t('res.form.time')}</label>
                    <select 
                      {...register('reservationTime', { required: 'L\'heure est requise' })}
                      className="w-full bg-background border border-border/20 rounded-lg py-2.5 px-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t('res.form.party')}</label>
                  <select 
                    {...register('partySize', { required: true, valueAsNumber: true })}
                    className="w-full bg-background border border-border/20 rounded-lg py-2.5 px-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? t('res.form.guest') : t('res.form.guests')}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-4 pt-4 border-t border-border/10">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t('res.form.name')}</label>
                    <input 
                      type="text" 
                      {...register('customerName', { required: 'Le nom est requis' })}
                      className="w-full bg-background border border-border/20 rounded-lg py-2.5 px-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t('res.form.phone')}</label>
                    <input 
                      type="tel" 
                      {...register('customerPhone', { required: 'Le téléphone est requis' })}
                      className="w-full bg-background border border-border/20 rounded-lg py-2.5 px-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t('res.form.requests')}</label>
                  <textarea 
                    {...register('specialRequests')}
                    rows={3}
                    className="w-full bg-background border border-border/20 rounded-lg py-2.5 px-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                    placeholder={t('res.form.requests_placeholder')}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {submitStatus === 'loading' ? t('res.form.submitting') : t('res.form.submit')}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-sm text-center">
                    {t('res.form.success')}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm text-center">
                    {errorMsg}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Reservations List */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3 className="text-2xl font-serif font-medium text-foreground mb-6">{t('res.list.upcoming')}</h3>
              {upcoming.length === 0 ? (
                <div className="bg-card p-8 rounded-xl border border-border/10 text-center text-muted-foreground">
                  {t('res.list.empty')}
                </div>
              ) : (
                <div className="space-y-4">
                  {upcoming.map(res => (
                    <ReservationCard key={res.id} reservation={res} onCancel={cancelReservation} />
                  ))}
                </div>
              )}
            </div>

            {past.length > 0 && (
              <div>
                <h3 className="text-2xl font-serif font-medium text-foreground mb-6">{t('res.list.past')}</h3>
                <div className="space-y-4 opacity-75">
                  {past.map(res => (
                    <ReservationCard key={res.id} reservation={res} onCancel={() => {}} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}