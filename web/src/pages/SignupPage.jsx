import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useTranslation } from '@/lib/i18n.js';

export default function SignupPage() {
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password');

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    try {
      await signup({
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        name: data.name
      });
      navigate('/');
    } catch (err) {
      setError(err.message || 'Échec de la création du compte.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    setError('');
    loginWithGoogle()
      .then(() => navigate('/'))
      .catch(err => setError('Google signup failed.'));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-md bg-card p-8 rounded-2xl border border-border/10 shadow-2xl">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <img 
              src="https://horizons-cdn.hostinger.com/2fd5e192-bba6-4986-a526-f52a113c775f/825872637d7c367861e42593baa6ab67.jpg" 
              alt="Logo" 
              className="w-16 h-16 rounded-full mx-auto border border-primary"
            />
          </Link>
          <h1 className="text-3xl font-serif font-bold text-foreground">{t('auth.signup.title')}</h1>
          <p className="text-muted-foreground mt-2">{t('auth.signup.subtitle')}</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t('auth.signup.name')}</label>
            <input 
              type="text" 
              {...register('name', { required: 'Le nom est requis' })}
              className="w-full bg-background border border-border/20 rounded-lg py-3 px-4 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Jean Dupont"
            />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t('auth.login.email')}</label>
            <input 
              type="email" 
              {...register('email', { required: 'L\'e-mail est requis' })}
              className="w-full bg-background border border-border/20 rounded-lg py-3 px-4 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="jean@exemple.fr"
            />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t('auth.login.password')}</label>
            <input 
              type="password" 
              {...register('password', { 
                required: 'Le mot de passe est requis',
                minLength: { value: 8, message: 'Le mot de passe doit comporter au moins 8 caractères' }
              })}
              className="w-full bg-background border border-border/20 rounded-lg py-3 px-4 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-xs text-destructive mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t('auth.signup.confirm_password')}</label>
            <input 
              type="password" 
              {...register('passwordConfirm', { 
                validate: value => value === password || 'Les mots de passe ne correspondent pas'
              })}
              className="w-full bg-background border border-border/20 rounded-lg py-3 px-4 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="••••••••"
            />
            {errors.passwordConfirm && <p className="text-xs text-destructive mt-1">{errors.passwordConfirm.message}</p>}
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? t('auth.signup.submitting') : t('auth.signup.submit')}
          </button>
        </form>

        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-muted-foreground">{t('auth.login.or')}</span>
          </div>
        </div>

        <button 
          onClick={handleGoogleSignup}
          className="mt-6 w-full py-3 rounded-lg bg-background border border-border/20 text-foreground font-medium hover:bg-secondary transition-colors flex items-center justify-center gap-3"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          {t('auth.login.google')}
        </button>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {t('auth.signup.has_account')} <Link to="/login" className="text-primary hover:underline">{t('auth.signup.login_link')}</Link>
        </p>
      </div>
    </div>
  );
}