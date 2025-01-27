
import { Link } from 'react-router-dom';
import '../../styles/pages/notfound.scss';

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="nofound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text"><p>Oops! La page que vous demandez n&apos;existe pas.</p>
        </p>
        <Link to="/" className="notfound-return-link">Retourner sur la page d&apos;accueil</Link>
      </div>
    </div>
  );
};

export default NotFound;

  