import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

/**
 * NavBar Component
 * Responsive navigation with mobile hamburger menu
 * Includes sticky header and accessible keyboard navigation
 */
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/services', label: 'Servicios' },
    { path: '/cafe', label: 'Café' },
    { path: '/gallery', label: 'Galería' },
    { path: '/about', label: 'Nosotros' },
    { path: '/booking', label: 'Reservar' },
    { path: '/contact', label: 'Contacto' }
  ];

  return (
    <header
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      role="banner"
      onKeyDown={handleKeyDown}
    >
      <div className="navbar-container container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-brand" aria-label="HMADI Home">
          <h1 className="navbar-logo">HMADI</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-nav" role="navigation" aria-label="Main navigation">
          <ul className="navbar-menu">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            <div
              className="navbar-overlay"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            ></div>
            <nav
              className="navbar-mobile"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <ul className="navbar-mobile-menu">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`navbar-mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                      tabIndex={isMenuOpen ? 0 : -1}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;
