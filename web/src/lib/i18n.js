import { useCallback } from 'react';

export const translations = {
  // Navigation & Common
  'nav.home': 'Accueil',
  'nav.menu': 'Menu',
  'nav.events': 'Événements',
  'nav.reservations': 'Réservations',
  'nav.contact': 'Contact',
  'nav.profile': 'Mon Profil',
  'nav.my_reservations': 'Mes Réservations',
  'nav.sign_out': 'Déconnexion',
  'nav.sign_in': 'Se connecter',
  'common.loading': 'Chargement...',
  'common.error': 'Erreur',
  'common.success': 'Succès',
  'common.save': 'Enregistrer',
  'common.cancel': 'Annuler',
  
  // Home Page
  'home.hero.subtitle': 'Expérience Nocturne Tropicale Premium',
  'home.hero.title': 'BAO Club',
  'home.hero.title_suffix': 'Nourriture • Jardin',
  'home.hero.desc': 'Plongez dans une oasis d\'excellence culinaire, de cocktails artisanaux et d\'énergie vibrante au cœur de la ville.',
  'home.hero.book': 'Réserver une Table',
  'home.hero.explore': 'Explorer le Menu',
  'home.about.title': 'Une Symphonie des Sens',
  'home.about.p1': 'Au BAO Club, nous pensons que dîner est plus qu\'un simple repas : c\'est une expérience. Nos maîtres chefs mélangent les techniques asiatiques traditionnelles avec une touche tropicale moderne pour créer des plats qui ravissent et surprennent.',
  'home.about.p2': 'Que vous nous rejoigniez pour un dîner intime dans notre terrasse de jardin luxuriante ou pour célébrer une étape importante dans notre salle à manger principale vibrante, chaque instant est conçu à la perfection.',
  'home.about.link': 'Découvrir Notre Histoire',
  'home.about.quote': '"Une fusion inoubliable de saveurs et d\'atmosphère."',
  'home.features.title': 'L\'Expérience BAO',
  'home.features.subtitle': 'Des éléments soigneusement sélectionnés qui rendent chaque visite extraordinaire.',
  'home.features.f1.title': 'Cuisine Exquise',
  'home.features.f1.desc': 'Des ingrédients de première qualité d\'origine mondiale, préparés avec passion et précision.',
  'home.features.f2.title': 'Jardin Tropical',
  'home.features.f2.desc': 'Dînez sous les étoiles dans notre oasis en terrasse luxuriante et climatisée.',
  'home.features.f3.title': 'Vie Nocturne Vibrante',
  'home.features.f3.desc': 'Passez du dîner à la danse en toute fluidité grâce à nos événements organisés.',
  'home.cta.title': 'Rejoignez-nous Ce Soir',
  'home.cta.hours.title': 'Heures d\'Ouverture',
  'home.cta.hours.desc': 'Lun - Dim : 17h00 - 02h00',
  'home.cta.location.title': 'Emplacement',
  'home.cta.location.desc': 'Tours, France',
  'home.cta.book': 'Réserver Votre Table',
  'home.cta.directions': 'Obtenir l\'Itinéraire',

  // Menu Page
  'menu.title': 'Notre Menu',
  'menu.subtitle': 'Découvrez un voyage culinaire à travers notre sélection soigneusement élaborée de plats et de boissons.',
  'menu.filter.all': 'Tout le Menu',
  'menu.empty': 'Aucun article trouvé dans cette catégorie.',
  'menu.add_to_order': 'Ajouter à la commande',

  // Events Page
  'events.title': 'Événements à Venir',
  'events.subtitle': 'Découvrez la vie nocturne animée du BAO Club. Du jazz en direct aux soirées tropicales, il se passe toujours quelque chose.',
  'events.empty.title': 'Aucun Événement à Venir',
  'events.empty.desc': 'Revenez plus tard pour de nouvelles annonces.',
  'events.book_tickets': 'Réserver des Billets',
  'events.free_entry': 'Entrée Gratuite',

  // Contact Page
  'contact.title': 'Nous Contacter',
  'contact.subtitle': 'Vous avez une question ou une demande spéciale ? Nous serions ravis de vous entendre.',
  'contact.info.title': 'Entrer en Contact',
  'contact.form.title': 'Envoyer un Message',
  'contact.form.name': 'Nom Complet',
  'contact.form.email': 'Adresse E-mail',
  'contact.form.message': 'Message',
  'contact.form.send': 'Envoyer le Message',
  'contact.form.sending': 'Envoi en cours...',
  'contact.form.success': 'Message envoyé avec succès ! Nous vous répondrons bientôt.',

  // Reservation Page
  'res.title': 'Réservations',
  'res.subtitle': 'Réservez votre table ou gérez vos réservations existantes.',
  'res.form.title': 'Réserver une Table',
  'res.form.date': 'Date',
  'res.form.time': 'Heure',
  'res.form.party': 'Nombre de Personnes',
  'res.form.guest': 'Personne',
  'res.form.guests': 'Personnes',
  'res.form.name': 'Nom',
  'res.form.phone': 'Téléphone',
  'res.form.requests': 'Demandes Spéciales',
  'res.form.requests_placeholder': 'Allergies, occasions, etc.',
  'res.form.submit': 'Confirmer la Réservation',
  'res.form.submitting': 'Confirmation...',
  'res.form.success': 'Réservation confirmée avec succès !',
  'res.list.upcoming': 'Réservations à Venir',
  'res.list.past': 'Passées & Annulées',
  'res.list.empty': 'Vous n\'avez aucune réservation à venir.',
  'res.card.title': 'Réservation de Table',
  'res.card.cancel': 'Annuler',

  // Profile Page
  'profile.title': 'Détails du Profil',
  'profile.member': 'Membre',
  'profile.form.name': 'Nom Complet',
  'profile.form.email': 'Adresse E-mail',
  'profile.form.email_help': 'L\'e-mail ne peut pas être modifié.',
  'profile.form.phone': 'Numéro de Téléphone',
  'profile.form.submit': 'Enregistrer les Modifications',
  'profile.form.submitting': 'Enregistrement...',
  'profile.form.success': 'Profil mis à jour avec succès.',
  'profile.form.error': 'Échec de la mise à jour du profil.',

  // Auth Pages
  'auth.login.title': 'Bon Retour',
  'auth.login.subtitle': 'Connectez-vous pour gérer vos réservations',
  'auth.login.email': 'E-mail',
  'auth.login.password': 'Mot de passe',
  'auth.login.submit': 'Se Connecter',
  'auth.login.submitting': 'Connexion...',
  'auth.login.google': 'Google',
  'auth.login.or': 'Ou continuer avec',
  'auth.login.no_account': 'Vous n\'avez pas de compte ?',
  'auth.login.signup_link': 'S\'inscrire',
  'auth.login.error': 'E-mail ou mot de passe invalide.',
  
  'auth.signup.title': 'Créer un Compte',
  'auth.signup.subtitle': 'Rejoignez le BAO Club pour des avantages exclusifs',
  'auth.signup.name': 'Nom Complet',
  'auth.signup.confirm_password': 'Confirmer le Mot de passe',
  'auth.signup.submit': 'S\'inscrire',
  'auth.signup.submitting': 'Création du compte...',
  'auth.signup.has_account': 'Vous avez déjà un compte ?',
  'auth.signup.login_link': 'Se connecter',

  // Footer
  'footer.desc': 'Une expérience nocturne tropicale premium alliant cuisine exquise, cocktails artisanaux et ambiance inoubliable.',
  'footer.links': 'Liens Rapides',
  'footer.contact': 'Nous Contacter',
  'footer.newsletter.title': 'Newsletter',
  'footer.newsletter.desc': 'Abonnez-vous pour recevoir des mises à jour sur les événements exclusifs et les menus de saison.',
  'footer.newsletter.placeholder': 'Votre adresse e-mail',
  'footer.newsletter.success': 'Abonnement réussi !',
  'footer.newsletter.error': 'Échec de l\'abonnement. Veuillez réessayer.',
  'footer.rights': 'BAO Club. Tous droits réservés.',
  'footer.privacy': 'Politique de Confidentialité',
  'footer.terms': 'Conditions d\'Utilisation',
};

export function useTranslation() {
  const t = useCallback((key) => {
    return translations[key] || key;
  }, []);

  const formatCurrency = useCallback((value) => {
    if (value === undefined || value === null) return '';
    return new Intl.NumberFormat('fr-FR', { 
      style: 'currency', 
      currency: 'EUR' 
    }).format(value);
  }, []);

  const formatDate = useCallback((dateStr) => {
    if (!dateStr) return '';
    return new Intl.DateTimeFormat('fr-FR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    }).format(new Date(dateStr));
  }, []);

  const formatDateTime = useCallback((dateStr) => {
    if (!dateStr) return '';
    return new Intl.DateTimeFormat('fr-FR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }).format(new Date(dateStr));
  }, []);

  return { t, formatCurrency, formatDate, formatDateTime };
}