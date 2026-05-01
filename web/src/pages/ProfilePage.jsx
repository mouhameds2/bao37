import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useProfile } from '@/hooks/useProfile.js';
import LoadingSpinner from '@/components/LoadingSpinner.jsx';
import { useTranslation } from '@/lib/i18n.js';

export default function ProfilePage() {
  const { currentUser } = useAuth();
  const { profile, loading, updateProfile } = useProfile(currentUser?.id);
  const [status, setStatus] = useState('idle');
  const { t } = useTranslation();

  const { register, handleSubmit, formState: { errors } } = useForm({
    values: {
      name: profile?.name || '',
      phone: profile?.phone || '',
    }
  });

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      await updateProfile(data);
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="bg-card rounded-2xl border border-border/10 shadow-lg overflow-hidden">
          <div className="bg-secondary p-8 border-b border-border/10 flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-3xl font-serif text-primary">
              {profile?.name?.charAt(0) || profile?.email?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-serif font-bold text-foreground">{profile?.name || 'Utilisateur'}</h1>
              <p className="text-muted-foreground">{profile?.email}</p>
              <div className="mt-2 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider">
                {t('profile.member')} {profile?.memberTier || 'Bronze'}
              </div>
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-xl font-serif font-medium text-foreground mb-6">{t('profile.title')}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('profile.form.name')}</label>
                <input 
                  type="text" 
                  {...register('name', { required: 'Le nom est requis' })}
                  className="w-full bg-background border border-border/20 rounded-lg py-2.5 px-4 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('profile.form.email')}</label>
                <input 
                  type="email" 
                  value={profile?.email || ''}
                  disabled
                  className="w-full bg-background/50 border border-border/10 rounded-lg py-2.5 px-4 text-muted-foreground cursor-not-allowed"
                />
                <p className="text-xs text-muted-foreground mt-1">{t('profile.form.email_help')}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('profile.form.phone')}</label>
                <input 
                  type="tel" 
                  {...register('phone')}
                  className="w-full bg-background border border-border/20 rounded-lg py-2.5 px-4 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? t('profile.form.submitting') : t('profile.form.submit')}
              </button>

              {status === 'success' && <p className="text-sm text-green-500">{t('profile.form.success')}</p>}
              {status === 'error' && <p className="text-sm text-destructive">{t('profile.form.error')}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}