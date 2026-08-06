// FIX: Create the main App component to manage routing and render pages.
import React, { useState, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import type { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AdminPage from './pages/AdminPage';
import AuthPage from './pages/AuthPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const { user, loading } = useAuth();

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  const navigate = (path: string) => {
    if (`#${path}` !== window.location.hash) {
      window.location.hash = path;
    }
  };

  const setCurrentPage = (page: Page, slug?: string) => {
    let path;
    switch (page) {
      case 'Home': path = '/'; break;
      case 'ServiceDetail': path = slug ? `/servicedetail/${slug}` : '/services'; break;
      case 'Auth': path = '/auth'; break;
      case 'Admin': path = '/admin'; break;
      default: path = `/${page.toLowerCase()}`;
    }
    navigate(path);
  };
  
  const path = currentPath.substring(1); // remove '#'
  const pathSegments = path.split('/');
  
  const isAdminRoute = path.startsWith('/admin');
  const isAuthRoute = path.startsWith('/auth');

  useEffect(() => {
    if (!loading) {
      if (isAdminRoute && !user) {
        navigate('/auth');
      } else if (isAuthRoute && user) {
        navigate('/admin');
      }
    }
  }, [isAdminRoute, isAuthRoute, user, loading]);

  if (loading) {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-xl font-semibold text-gray-700">Loading Application...</div>
        </div>
    );
  }

  // Render correct layout based on route
  if (isAdminRoute) {
    if (!user) {
      return <div className="flex items-center justify-center h-screen">Redirecting to login...</div>;
    }
    return <AdminPage />;
  }

  if (isAuthRoute) {
    if (user) {
      return <div className="flex items-center justify-center h-screen">Redirecting to admin panel...</div>;
    }
    return <AuthPage setCurrentPage={setCurrentPage} />;
  }
  
  // Public Pages Routing
  let pageComponent;
  let currentPage: Page = 'Home';
  const pageName = pathSegments[1];

  if (path === '/' || path === '' || pageName === 'home') {
      currentPage = 'Home';
      pageComponent = <HomePage setCurrentPage={setCurrentPage} />;
  } else if (pageName === 'servicedetail' && pathSegments[2]) {
      currentPage = 'ServiceDetail';
      const slug = pathSegments[2];
      pageComponent = <ServiceDetailPage slug={slug} />;
  } else if (pageName === 'services') {
      currentPage = 'Services';
      pageComponent = <ServicesPage setCurrentPage={setCurrentPage} />;
  } else if (pageName === 'packages') {
      currentPage = 'Packages';
      pageComponent = <PackagesPage />;
  } else if (pageName === 'portfolio') {
      currentPage = 'Portfolio';
      pageComponent = <PortfolioPage />;
  } else if (pageName === 'about') {
      currentPage = 'About';
      pageComponent = <AboutPage />;
  } else if (pageName === 'contact') {
      currentPage = 'Contact';
      pageComponent = <ContactPage />;
  } else {
      currentPage = 'Home';
      pageComponent = <HomePage setCurrentPage={setCurrentPage} />;
  }
  
  return (
      <div className="flex flex-col min-h-screen bg-white">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="flex-grow">
            {pageComponent}
        </main>
        <Footer />
        <ScrollToTop />
      </div>
  );
};

export default App;
