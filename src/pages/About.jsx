import config from '../config.json'
import './About.css'

/**
 * About Page
 * Company story, mission, and team profiles
 */
const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Sobre HMADI</h1>
          <p>Donde la belleza, el café y el autocuidado convergen</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section about-story">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Nuestra Historia</h2>
              <p>
                Fundado por {config.business.owner}, HMADI nació de una visión simple: crear un santuario donde la belleza y
                la indulgencia se encuentran. Reimaginamos la experiencia tradicional del salón agregando un
                elemento de cafetería, permitiendo a nuestros huéspedes saborear café especial y
                pasteles de queso artesanales mientras esperan o simplemente se relajan.
              </p>
              <p>
                Desde que abrimos nuestras puertas, nos hemos comprometido a brindar servicios de belleza
                premium utilizando solo productos de alta calidad y libres de crueldad animal. Nuestros estilistas certificados,
                artistas de uñas y cosmetólogas aportan años de experiencia y pasión genuina a
                cada cita.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80"
              alt="Elegante interior del salón HMADI"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section about-mission">
        <div className="container">
          <h2 className="section-title">Nuestra Misión</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Calidad Premium</h3>
              <p>
                Utilizamos solo los mejores productos y técnicas, asegurando que cada servicio cumpla
                con los más altos estándares de excelencia.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Prácticas Éticas</h3>
              <p>
                Desde productos de belleza libres de crueldad animal hasta café de origen ético, estamos comprometidos
                con prácticas comerciales responsables.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Atención Centrada en el Cliente</h3>
              <p>
                Tu comodidad y satisfacción son nuestras máximas prioridades. Escuchamos, personalizamos y
                ofrecemos experiencias adaptadas a ti.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <h3>Experiencia Holística</h3>
              <p>
                Más allá de los tratamientos de belleza, ofrecemos una experiencia completa de autocuidado con nuestra
                cafetería integrada y atmósfera relajante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section about-team">
        <div className="container">
          <h2 className="section-title">Conoce a Nuestro Equipo</h2>
          <div className="team-grid">
            {config.team.map((member, index) => (
              <div key={index} className="team-member card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                  loading="lazy"
                />
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section about-values">
        <div className="container">
          <div className="values-content">
            <h2>¿Por Qué Elegir HMADI?</h2>
            <ul className="values-list">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Estándares premium de higiene y herramientas sanitizadas</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Profesionales de belleza certificados y experimentados</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>100% libre de crueldad animal y productos eco-conscientes</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Café especial de cortesía con tus citas</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Atmósfera relajante digna de Instagram</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Horarios flexibles y reservas en línea</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
