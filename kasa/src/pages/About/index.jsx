import { useState } from 'react';
import '../../styles/pages/global.scss';
import '../../styles/components/about-banner.scss';
import '../../styles/components/about-collapse.scss';
import Collapse from '../../components/AboutCollapse';

export default function About() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div>
      <div className="about-banner">
        <img src="/src/assets/images/Imagesource2.png" alt="Bannière" className="about-banner-image"/>
        <div className="banner-overlay"></div>
      </div>

      <Collapse 
        isOpen={isOpen1} 
        title="Fiabilité" 
        onClick={() => setIsOpen1(!isOpen1)}
      >
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
      </Collapse>

      <Collapse 
        isOpen={isOpen2} 
        title="Respect" 
        onClick={() => setIsOpen2(!isOpen2)}
      >
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
      </Collapse>

      <Collapse 
        isOpen={isOpen3} 
        title="Service" 
        onClick={() => setIsOpen3(!isOpen3)}
      >
        La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
      </Collapse>

      <Collapse 
        isOpen={isOpen4} 
        title="Sécurité" 
        onClick={() => setIsOpen4(!isOpen4)}
      >
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte, qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
      </Collapse>
    </div>
  );
}







