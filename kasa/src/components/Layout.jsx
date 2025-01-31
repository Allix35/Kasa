import { NavLink } from 'react-router-dom';
import logo from '../assets/images/LOGO.png';
import logoFooter from '../assets/images/Logofooter.png'
import PropTypes from 'prop-types';


export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <div className="logo-header">
            <img src={logo} alt="Logo Kasa" className="logo" />
          </div>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Accueil</NavLink></li>
            <li><NavLink to="/a-propos" className={({ isActive }) => (isActive ? 'active' : '')}>A Propos</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <div className="footer-elements">
          <img src={logoFooter} alt="Logo Kasa" className="footer-logo" />
          <p>© 2020 Kasa. All <span>rights reserved</span></p>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired, 
};
