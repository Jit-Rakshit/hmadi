import { Link } from 'react-router-dom'
import './Hero.css'

/**
 * Hero Component
 * Large hero section with background image and CTA buttons
 */
const Hero = () => {
  return (
    <section className="hero" role="banner">
      {/* Background Image with overlay */}
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80"
          alt="Elegante interior del salón con estaciones de estilismo modernas"
          className="hero-image"
          loading="eager"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content container">
        <h1 className="hero-title">HMADI</h1>
        <p className="hero-subtitle">Belleza, Café y Pastel de Queso</p>
        <p className="hero-tagline">Tu momento de autocuidado.</p>

        <div className="hero-cta">
          <Link to="/booking" className="btn btn-primary">
            Reservar Cita
          </Link>
          <Link to="/services" className="btn btn-secondary">
            Explorar Servicios
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="hero-badges">
          <div className="hero-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Higiene Premium</span>
          </div>
          <div className="hero-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>Productos Libres de Crueldad</span>
          </div>
          <div className="hero-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>Estilistas Certificados</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
