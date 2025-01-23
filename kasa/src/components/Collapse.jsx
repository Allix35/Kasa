import PropTypes from 'prop-types';
import '../styles/pages/about.scss';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ isOpen, children, title, onClick }) => {
  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-elements">
        <span>{title}</span>
        <button className="collapse-button" onClick={onClick}>
          <FontAwesomeIcon 
            icon={isOpen ? faAngleDown : faAngleUp} 
            className="arrow-icon" 
          />
        </button>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
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







  
