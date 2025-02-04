import { Link } from 'react-router-dom';
import '../../styles/pages/global.scss';
import '../../styles/pages/notfound.scss';

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">
          <span className="notfound-text-line">Oops! La page que</span> 
          <span className="notfound-text-line"> vous demandez n&apos;existe pas.</span>
        </p>
        <Link to="/" className="notfound-return-link">Retourner sur la page d&apos;accueil</Link>
      </div>
    </div>
  );
};

export default NotFound;


  