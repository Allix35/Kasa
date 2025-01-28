import { useParams } from 'react-router-dom';
import { useState } from 'react';
import logementsData from '../../assets/logements.json';
import Carousel from '../../components/Carrousel';
import NotFound from '../NotFound';
import '../../styles/pages/fichelogement.scss';

export default function FicheLogement() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

  const toggleDescription = () => setDescriptionOpen(!isDescriptionOpen);
  const toggleEquipments = () => setEquipmentsOpen(!isEquipmentsOpen);

  if (!logement) {
    return <NotFound />;
  }

  return (
    <div className="housing-form">
      {/* Carrousel */}
      {logement.pictures.length > 1 ? (
        <Carousel slides={logement.pictures} />
      ) : (
        <img src={logement.cover} alt={logement.title} className="housing-image" />
      )}

      <div className="housing-content">
        <div className="housing-header">
          <div className="housing-info">
            <h1 className="housing-form-title">{logement.title}</h1>
            <p className="housing-location">{logement.location}</p>
          </div>

          {/* Host info (photo et nom) */}
          <div className="host-info">
            <div className="host-name">
              {/* Séparation du prénom et nom de famille */}
              <p className="first-name">{logement.host.name.split(' ')[0]}</p>
              <p className="last-name">{logement.host.name.split(' ')[1]}</p>
            </div>
            <img src={logement.host.picture} alt={logement.host.name} className="host-image" />
          </div>
        </div>

        {/* Tags et Rating (étoiles) */}
        <div className="tags-rating-container">
          <div className="tags-info">
            <ul>
              {logement.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className="rating-info">
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={`fa-solid fa-star ${index < logement.rating ? 'active-stars' : ''}`}
                ></i>
              ))}
            </div>
          </div>
        </div>

        {/* Collapse */}
        <div className="housing-form-collapse-container">
          {/* Description Collapse */}
          <div className={`housing-form-collapse ${isDescriptionOpen ? 'open' : ''}`}>
            <button className="collapse-elements" onClick={toggleDescription}>
              Description
              <i className={`fa-solid fa-chevron-up ${isDescriptionOpen ? 'rotate' : ''}`} />
            </button>
            {isDescriptionOpen && <p className="housing-description">{logement.description}</p>}
          </div>

          {/* Equipments Collapse */}
          <div className={`housing-form-collapse ${isEquipmentsOpen ? 'open' : ''}`}>
            <button className="collapse-elements" onClick={toggleEquipments}>
              Équipements
              <i className={`fa-solid fa-chevron-up ${isEquipmentsOpen ? 'rotate' : ''}`} />
            </button>
            {isEquipmentsOpen && (
              <ul>
                {logement.equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}










