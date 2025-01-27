import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/carrousel.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="carrousel">
      {length > 1 && (
        <button className="left-arrow" onClick={prevImage}>
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
        <button className="right-arrow" onClick={nextImage}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
    </section>
  );
}

Carrousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;



