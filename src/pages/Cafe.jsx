import config from '../config.json'
import './Cafe.css'

/**
 * Cafe Page
 * Display cafe menu with coffee, teas, and cheesecakes
 */
const Cafe = () => {
  const menuSections = [
    {
      title: 'Café Especial',
      items: config.menu.coffee,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80'
    },
    {
      title: 'Tés Premium',
      items: config.menu.teas,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80'
    },
    {
      title: 'Pasteles de Queso Artesanales',
      items: config.menu.cheesecakes,
      image: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&q=80'
    }
  ];

  return (
    <div className="cafe-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Menú del Café</h1>
          <p>Disfruta de café especial y pasteles de queso artesanales</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section cafe-intro">
        <div className="container">
          <div className="cafe-intro-content">
            <div className="cafe-intro-text">
              <h2>Un Café Dentro de Tu Santuario</h2>
              <p>
                En HMADI, creemos que el autocuidado va más allá de los tratamientos de belleza. Nuestro café sirve
                café premium de granjas éticas, tés de hojas sueltas y pasteles de queso hechos
                frescos diariamente por nuestro equipo de repostería. Ya sea que estés esperando tu cita
                o simplemente pases a visitarnos, disfruta un momento de indulgencia.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80"
              alt="Acogedor interior del café con asientos cómodos"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      {menuSections.map((section, index) => (
        <section key={index} className={`section menu-section ${index % 2 === 0 ? 'menu-section-alt' : ''}`}>
          <div className="container">
            <div className={`menu-content ${index % 2 === 0 ? '' : 'menu-content-reverse'}`}>
              <div className="menu-image-container">
                <img
                  src={section.image}
                  alt={section.title}
                  className="menu-image"
                  loading="lazy"
                />
              </div>
              <div className="menu-list-container">
                <h2 className="menu-section-title">{section.title}</h2>
                <div className="menu-items">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="menu-item">
                      <div className="menu-item-header">
                        <h3 className="menu-item-name">{item.name}</h3>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      <p className="menu-item-description">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section cafe-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Visita Nuestro Café Hoy</h2>
            <p>¡Aceptamos clientes sin cita! O reserva una cita de belleza y disfruta café de cortesía.</p>
            <div className="cafe-cta-buttons">
              <a href="#visit" className="btn btn-primary">Encuéntranos</a>
              <a href="/booking" className="btn btn-secondary">Reservar Cita</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cafe;
