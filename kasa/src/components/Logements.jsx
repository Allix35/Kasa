
import React, { useEffect, useState } from 'react';
import logementsData from '../assets/logements.json'; 

export default function Logements() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  return (
    <div className="housing-container">
      {logements.map((logement) => (
        <div key={logement.id} className="housing-card">
          <img src={logement.cover} alt={logement.title} className="housing-image" />
          <h2 className="housing-title">{logement.title}</h2>
        </div>
      ))}
    </div>
  );
}
