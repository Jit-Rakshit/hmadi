import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

// Structured data for SEO (LocalBusiness schema)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "HMADI",
  "description": "Beauty, Coffee & Cheesecake—Your moment of self-care.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Inspiración 123",
    "addressLocality": "Centro"
  },
  "telephone": "+1-555-123-4567",
  "openingHours": "Tu-Su 10:00-20:00",
  "priceRange": "$$"
};

// Inject structured data into page
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
