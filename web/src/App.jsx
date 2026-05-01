import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './contexts/AuthContext.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ReservationPage from './pages/ReservationPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                
                {/* Protected Routes */}
                <Route path="/reservations" element={
                  <ProtectedRoute>
                    <ReservationPage />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } />
                
                {/* Catch all */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
                    <div className="text-center">
                      <h1 className="text-6xl font-serif text-primary mb-4">404</h1>
                      <p className="text-xl mb-8">Page not found</p>
                      <a href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg">Return Home</a>
                    </div>
                  </div>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;