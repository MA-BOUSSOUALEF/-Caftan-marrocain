import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CollectionPage from './components/CollectionPage';
import AccessoriesPage from './components/AccessoriesPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'collection':
        return <CollectionPage />;
      case 'accessories':
        return <AccessoriesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-ivory">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;