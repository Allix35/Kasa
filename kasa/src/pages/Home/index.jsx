import React from 'react';
import '../Home'; 
import Logements from '../../components/Logements';

export default function Home() {
  return (
    <div className="banner-elements">
      <div className="banner">
        <img src="/src/assets/images/Imagesource1.png" alt="Bannière" className="banner-image"/>
        <div className="banner-overlay"></div>
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      </div>
      <Logements />
    </div>
  );
}

  