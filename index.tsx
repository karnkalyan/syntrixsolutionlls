import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SiteDataProvider } from './context/SiteDataContext';
import { AuthProvider } from './hooks/useAuth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SiteDataProvider>
        <App />
      </SiteDataProvider>
    </AuthProvider>
  </React.StrictMode>
);
