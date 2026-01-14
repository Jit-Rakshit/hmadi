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
          <h2 className="section-title">Bienvenidos a HMADI</h2>
          <p className="home-welcome-text">
            Donde la belleza se encuentra con la indulgencia. Experimenta servicios de salón premium mientras disfrutas
            café especial y pasteles de queso artesanales. HMADI es tu santuario de autocuidado,
            combinando estilismo experto, arte de uñas y tratamientos de cuidado de la piel con un ambiente acogedor de cafetería.
          </p>
          <Link to="/about" className="btn btn-secondary">Conoce Más Sobre Nosotros</Link>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section home-services">
        <div className="container">
          <h2 className="section-title">Servicios Destacados</h2>
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
                    Reservar Ahora
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/services" className="btn btn-secondary">Ver Todos los Servicios</Link>
          </div>
        </div>
      </section>

      {/* Cafe Preview */}
      <section className="section home-cafe">
        <div className="container">
          <div className="home-cafe-content">
            <div className="home-cafe-text">
              <h2>Disfruta Nuestro Café</h2>
              <p>
                Mientras esperas tu cita o simplemente quieres relajarte, disfruta nuestra selección
                de café especial, tés premium y pasteles de queso artesanales. Cada bebida es
                preparada con cuidado, cada rebanada es hecha fresca diariamente.
              </p>
              <Link to="/cafe" className="btn btn-primary">Ver Menú</Link>
            </div>
            <div className="home-cafe-images">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"
                alt="Arte latte en taza de cerámica"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=600&q=80"
                alt="Deliciosa rebanada de pastel de queso con cubierta de frutos rojos"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section home-cta">
        <div className="container">
          <h2>¿Lista para tu Momento de Autocuidado?</h2>
          <p>Reserva tu cita hoy y experimenta la diferencia HMADI.</p>
          <Link to="/booking" className="btn btn-primary btn-large">Reserva tu Cita</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
