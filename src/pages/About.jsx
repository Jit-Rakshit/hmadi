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
          <h1>About HMADI</h1>
          <p>Where beauty, coffee, and self-care converge</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section about-story">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded by {config.business.owner}, HMADI was born from a simple vision: to create a sanctuary where beauty and
                indulgence meet. We reimagined the traditional salon experience by adding a
                cafe element, allowing our guests to savor specialty coffee and artisanal
                cheesecakes while they wait or simply unwind.
              </p>
              <p>
                Since opening our doors, we've been committed to providing premium beauty
                services using only cruelty-free, high-quality products. Our certified stylists,
                nail artists, and estheticians bring years of expertise and genuine passion to
                every appointment.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80"
              alt="Elegant HMADI salon interior"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section about-mission">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Premium Quality</h3>
              <p>
                We use only the finest products and techniques, ensuring every service meets
                the highest standards of excellence.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Ethical Practices</h3>
              <p>
                From cruelty-free beauty products to ethically sourced coffee, we're committed
                to responsible business practices.
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
              <h3>Client-Centered Care</h3>
              <p>
                Your comfort and satisfaction are our top priorities. We listen, customize, and
                deliver personalized experiences.
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
              <h3>Holistic Experience</h3>
              <p>
                Beyond beauty treatments, we offer a complete self-care experience with our
                integrated cafe and relaxing atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section about-team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
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
            <h2>Why Choose HMADI?</h2>
            <ul className="values-list">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Premium hygiene standards and sanitized tools</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Certified and experienced beauty professionals</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>100% cruelty-free and eco-conscious products</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Complimentary specialty coffee with appointments</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Relaxing, Instagram-worthy atmosphere</span>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Flexible scheduling and online booking</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
