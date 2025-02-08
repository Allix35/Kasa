
import { useState } from 'react'; {/* Hook import to stock and modify images index*/}
import PropTypes from 'prop-types';
import '../styles/components/housing-carrousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

{/* Function to display image using prop slide or return empty array */}

export default function HousingCarrousel({ slides = [] }) {
  
  const [current, setCurrent] = useState(0); {/* Display current image, start with first index*/}

  if (!Array.isArray(slides) || slides.length === 0) {
    return (
      <div className="carrousel-error">
        <p>Aucune image disponible.</p>
      </div>
    );
  }

  {/* Stock images in to slide */}

  const length = slides.length;

  {/* Function for next image */}

  const nextImage = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1)); {/* Last image to 1st image*/}
  };

 {/* Function for preview image */}

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1)); {/* 1st image to Last image */}
  };

  return (
    <section className="carrousel">
      
      {/* Image container */}

      <div className="image-container">

        {/* Iterate all images and index in arrow slide and add them unique key */}

        {slides.map((image, index) => (
          <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
            
            {/* Display image if index = selected image */}

            {index === current && (
              <img src={image} alt={`Logement ${index + 1}`} className="slide__image" />
            )}

            {/* Display numbers */}

            {index === current && length > 1 && (
              <span className="slide__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Display right arrow if few images  */}

      {length > 1 && (
        <button className="right-arrow" onClick={nextImage} aria-label="Image suivante">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}

     {/* Display left arrow if few images */}

      {length > 1 && (
        <button className="left-arrow" onClick={prevImage} aria-label="Image précédente">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}

    </section>
  );
}

{/* Ckecking prop slide, must return array with URL */}

HousingCarrousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,  
};






