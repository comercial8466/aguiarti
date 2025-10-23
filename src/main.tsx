import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import SupportPage from './pages/SupportPage';
import './index.css';

// Simple router based on pathname
const Router = () => {
  const path = window.location.pathname;
  
  if (path === '/support') {
    return <SupportPage />;
  }
  
  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
