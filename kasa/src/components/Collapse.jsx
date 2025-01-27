import PropTypes from 'prop-types';
import '../styles/pages/about.scss';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'; // Utilise uniquement faAngleUp

const Collapse = ({ isOpen, children, title, onClick }) => {
  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-elements">
        <span>{title}</span>
        <button className="collapse-button" onClick={onClick}>
          <FontAwesomeIcon 
            icon={faAngleUp} 
            className={`arrow-icon ${isOpen ? 'rotate' : ''}`} // Applique la classe de rotation lorsque isOpen est vrai
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














  
