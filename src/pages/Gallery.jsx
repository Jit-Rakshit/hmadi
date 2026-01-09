import { useState, useEffect } from 'react'
import config from '../config.json'
import './Gallery.css'

/**
 * Gallery Page
 * Responsive image grid with lazy loading
 */
const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  useEffect(() => {
    // Add loaded class to images as they load for fade-in effect
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
      if (img.complete) {
        img.classList.add('loaded');
      }
    });
  }, [loadedImages]);

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Explore our work and the HMADI experience</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {config.gallery.map((image, index) => (
              <div
                key={index}
                className={`gallery-item ${loadedImages.has(index) ? 'loaded' : ''}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <p className="gallery-caption">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gallery-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Like What You See?</h2>
            <p>Follow us on Instagram for daily inspiration and behind-the-scenes content.</p>
            <div className="gallery-cta-buttons">
              <a
                href={config.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Follow on Instagram
              </a>
              <a href="/booking" className="btn btn-secondary">Book Your Transformation</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
