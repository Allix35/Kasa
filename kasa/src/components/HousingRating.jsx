import PropTypes from "prop-types";
import '../styles/components/housing-rating.scss';

export default function Rating({ rating }) {
  return (
    <div className="rating-info">
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <i key={index} className={`fa-solid fa-star ${index < rating ? "active-stars" : ""}`} />
        ))}
      </div>
    </div>
  );
}

// ✅ Ajout de la validation des props
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
