import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css"; // Manrope's extra-bold weight looks great for headings

import "@fontsource/audiowide/400.css"; // Audiowide is a fun, playful font that can be used for headings or special text

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
