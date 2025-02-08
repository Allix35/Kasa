import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import '../styles/components/housing-rating.scss'; 

export default function Rating({ rating }) {
  return (
    <div className="rating-info">
      <div className="stars">

        {/* Compare index and rate and display 5 stars */}

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

Rating.propTypes = {
  rating: PropTypes.number.isRequired, // Rating must be a number
};

