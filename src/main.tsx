import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { makeServer } from './server.ts';
import App from './App.tsx';

makeServer();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
