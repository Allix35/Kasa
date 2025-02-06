import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/housing-carrousel.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function HousingCarrousel({ slides = [] }) {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(slides) || slides.length === 0) {
    return (
      <div className="carrousel-error">
        <p>Aucune image disponible.</p>
      </div>
    );
  }

  const length = slides.length;

  const nextImage = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  return (
    <section className="carrousel">
      {length > 1 && (
        <button className="left-arrow" onClick={prevImage} aria-label="Image précédente">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}
      <div className="image-container">
        {slides.map((image, index) => (
          <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
            {index === current && (
              <img src={image} alt={`Logement ${index + 1}`} className="slide__image" />
            )}
            {index === current && length > 1 && (
              <span className="slide__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        ))}
      </div>
      {length > 1 && (
        <button className="right-arrow" onClick={nextImage} aria-label="Image suivante">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
    </section>
  );
}

HousingCarrousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};






