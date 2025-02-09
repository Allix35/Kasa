import PropTypes from 'prop-types';   {/* Import PropTypes to validate props */}
import '../styles/components/about-collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'; 

const Collapse = ({ isOpen, children, title, onClick }) => {
  return (
    <div className={`about-collapse ${isOpen ? 'open' : ''}`}>   {/* Add 'open' class if state isOpen is true */}
      <div className="about-collapse-elements">
        <span>{title}</span>
        <button className="about-collapse-button" onClick={onClick}>

          {/* Add 'rotate' class if open */}

          <FontAwesomeIcon 
            icon={faAngleUp} 
            className={`arrow-icon ${isOpen ? 'rotate' : ''}`}    
          />
        </button>
      </div>
      {isOpen && <div className="about-collapse-content">{children}</div>}  {/* Display content if isOpen is true */}
    </div>
  );
};


Collapse.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,  
};

export default Collapse;














  
