import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/lib/i18n.js';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const { isAuthenticated, logout, currentUser } = useAuth();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.menu'), path: '/menu' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.reservations'), path: '/reservations' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-border/20 py-3 shadow-lg" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://horizons-cdn.hostinger.com/2fd5e192-bba6-4986-a526-f52a113c775f/825872637d7c367861e42593baa6ab67.jpg" 
              alt="BAO Club Logo" 
              className="h-10 w-10 rounded-full object-cover border border-primary/50 group-hover:border-primary transition-colors"
            />
            <span className="font-serif text-xl font-bold tracking-wider text-foreground group-hover:text-primary transition-colors">
              BAO CLUB
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2",
                  location.pathname === link.path ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Auth / Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/30 hover:border-primary/50 transition-colors"
                >
                  <User size={16} className="text-primary" />
                  <span className="text-sm font-medium">{currentUser?.name || t('nav.profile')}</span>
                </button>
                
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-card border border-border/20 rounded-xl shadow-xl py-2 overflow-hidden">
                    <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary transition-colors">
                      {t('nav.profile')}
                    </Link>
                    <Link to="/reservations" className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary transition-colors">
                      {t('nav.my_reservations')}
                    </Link>
                    <button 
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors flex items-center gap-2"
                    >
                      <LogOut size={14} />
                      {t('nav.sign_out')}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login"
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                {t('nav.sign_in')}
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/20 shadow-xl py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                location.pathname === link.path ? "bg-secondary text-primary" : "text-foreground hover:bg-secondary/50"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-border/20 my-2" />
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-secondary/50">
                {t('nav.profile')}
              </Link>
              <button 
                onClick={logout}
                className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-destructive hover:bg-destructive/10"
              >
                {t('nav.sign_out')}
              </button>
            </>
          ) : (
            <Link 
              to="/login"
              className="block text-center px-4 py-3 rounded-lg bg-primary text-primary-foreground text-base font-medium"
            >
              {t('nav.sign_in')}
            </Link>
          )}
        </div>
      )}
    </header>
  );
}