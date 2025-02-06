import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/components/housing-collapse.scss"; // ✅ Assure-toi que le fichier SCSS existe

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={`housing-collapse ${isOpen ? "open" : ""}`}>
        <button className="housing-collapse-header" onClick={() => setIsOpen(!isOpen)}>
          {title}
          <i className={`fa-solid fa-chevron-up ${isOpen ? "rotate" : ""}`} />
        </button>
        <div className="housing-collapse-content">
          {isOpen && <div className="content">{children}</div>}
        </div>
      </div>
    );
}

// ✅ Validation des props avec PropTypes
Collapse.propTypes = {
  title: PropTypes.string.isRequired, // Le titre du collapse
  children: PropTypes.node.isRequired, // Le contenu (texte, liste...)
};

