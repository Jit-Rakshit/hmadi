import { useState } from 'react'
import { Link } from 'react-router-dom'
import config from '../config.json'
import './Services.css'

/**
 * Services Page
 * Display all salon services by category with filtering
 */
const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    ...config.services.map(cat => ({ id: cat.id, label: cat.category }))
  ];

  const filteredServices = activeCategory === 'all'
    ? config.services
    : config.services.filter(cat => cat.id === activeCategory);

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Premium beauty treatments tailored to your needs</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section">
        <div className="container">
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          {filteredServices.map(category => (
            <div key={category.id} className="service-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="grid grid-2">
                {category.items.map((service, index) => (
                  <div key={index} className="service-card card">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="card-image"
                      loading="lazy"
                    />
                    <div className="card-content">
                      <h3 className="card-title">{service.name}</h3>
                      <p className="card-text">{service.description}</p>
                      <div className="service-details">
                        <div className="service-detail">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span>{service.duration}</span>
                        </div>
                        <div className="service-detail">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>
                          <span>{service.price}</span>
                        </div>
                      </div>
                      <Link to="/booking" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                        Book This Service
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Not sure which service is right for you?</h2>
            <p>Our expert team is here to help you choose the perfect treatment.</p>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
