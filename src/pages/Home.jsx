import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import config from '../config.json'
import './Home.css'

/**
 * Home Page
 * Landing page with hero, featured services, and cafe preview
 */
const Home = () => {
  // Get featured services (first item from each category)
  const featuredServices = config.services.map(category => category.items[0]);

  return (
    <div className="home">
      <Hero />

      {/* Welcome Section */}
      <section className="section home-welcome">
        <div className="container">
          <h2 className="section-title">Welcome to HMADI</h2>
          <p className="home-welcome-text">
            Where beauty meets indulgence. Experience premium salon services while enjoying
            specialty coffee and handcrafted cheesecakes. HMADI is your sanctuary for self-care,
            combining expert styling, nail artistry, and skincare treatments with a cozy cafe atmosphere.
          </p>
          <Link to="/about" className="btn btn-secondary">Learn More About Us</Link>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section home-services">
        <div className="container">
          <h2 className="section-title">Featured Services</h2>
          <div className="grid grid-3">
            {featuredServices.map((service, index) => (
              <div key={index} className="card fade-in">
                <img
                  src={service.image}
                  alt={service.name}
                  className="card-image"
                  loading="lazy"
                />
                <div className="card-content">
                  <h3 className="card-title">{service.name}</h3>
                  <p className="card-text">{service.description}</p>
                  <div className="service-meta">
                    <span className="service-duration">{service.duration}</span>
                    <span className="service-price">{service.price}</span>
                  </div>
                  <Link to="/booking" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Cafe Preview */}
      <section className="section home-cafe">
        <div className="container">
          <div className="home-cafe-content">
            <div className="home-cafe-text">
              <h2>Indulge in Our Cafe</h2>
              <p>
                While you wait for your appointment or simply want to unwind, enjoy our selection
                of specialty coffee, premium teas, and artisanal cheesecakes. Every drink is
                crafted with care, every slice is made fresh daily.
              </p>
              <Link to="/cafe" className="btn btn-primary">See Menu</Link>
            </div>
            <div className="home-cafe-images">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"
                alt="Latte art in ceramic cup"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=600&q=80"
                alt="Delicious cheesecake slice with berry topping"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section home-cta">
        <div className="container">
          <h2>Ready for Your Moment of Self-Care?</h2>
          <p>Book your appointment today and experience the HMADI difference.</p>
          <Link to="/booking" className="btn btn-primary btn-large">Book Your Appointment</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
