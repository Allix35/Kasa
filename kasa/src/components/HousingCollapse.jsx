import { useState } from "react";      {/* Hook to stock and modify active image index */}
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import "../styles/components/housing-collapse.scss"; 

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false); // Defined collapse state
  
    return (
      <div className={`housing-collapse ${isOpen ? "open" : ""}`}>
        <button className="housing-collapse-header" onClick={() => setIsOpen(!isOpen)}>
          {title}
          <FontAwesomeIcon 
            icon={faAngleUp} 
            className={`arrow-icon ${isOpen ? 'rotate' : ''}`} 
          />
        </button>
        <div className="housing-collapse-content">
          {isOpen && <div className="content">{children}</div>}
        </div>
      </div>
    );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired, 
};

