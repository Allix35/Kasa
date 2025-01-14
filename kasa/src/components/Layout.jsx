import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">À propos</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Kasa © 2020</p>
      </footer>
    </div>
  );
}
