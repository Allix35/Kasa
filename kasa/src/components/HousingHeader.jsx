import "../styles/components/housing-header.scss";
import PropTypes from "prop-types";

export default function HousingHeader({ title, location, tags }) {
  return (
    <div className="housing-info">
      <h1 className="housing-form-title">{title}</h1>
      <p className="housing-location">{location}</p>

      {/* Tags */}
      <div className="tags-info">
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ✅ Ajout de la validation des props
HousingHeader.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

  