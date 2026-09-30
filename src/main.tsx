import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@iconscout/unicons/css/line.css';
import App from './App.tsx';
import Favicon from './assets/Favicon.png';

const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
if (favicon) {
  favicon.href = Favicon;
  favicon.type = 'image/png';
} else {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = Favicon;
  document.head.appendChild(link);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
