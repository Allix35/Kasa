import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import de FontAwesomeIcon
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import de l'icône étoile
import '../styles/components/housing-rating.scss'; // Import du fichier CSS

export default function Rating({ rating }) {
  return (
    <div className="rating-info">
      <div className="stars">
        {/* Génère 5 étoiles en comparant l'index avec la note */}
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon 
            key={index} 
            icon={faStar} 
            className={index < rating ? "active-stars" : ""} 
          />
        ))}
      </div>
    </div>
  );
}

// ✅ Validation des props avec PropTypes
Rating.propTypes = {
  rating: PropTypes.number.isRequired, // `rating` doit être un nombre
};

