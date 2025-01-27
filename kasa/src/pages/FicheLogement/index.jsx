import { useParams,} from 'react-router-dom';
import logementsData from '../../assets/logements.json'; 
import Carousel from '../../components/carrousel'; 
import NotFound from '../NotFound';

export default function FicheLogement() {
  const { id } = useParams(); 
  const logement = logementsData.find(logement => logement.id === id); 

  if (!logement) {
    return <NotFound />; 
  }

  return (
    <div className="housing-form">
      <h1>{logement.title}</h1>

      {logement.pictures.length > 1 ? (
        <Carousel slides={logement.pictures} /> 
      ) : (
        <img src={logement.cover} alt={logement.title} />
      )}

      <p>{logement.description}</p>

      <div>
        <h3>Hôte</h3>
        <img src={logement.host.picture} alt={logement.host.name} />
        <p>{logement.host.name}</p>
      </div>

      <div>
        <h3>Équipements</h3>
        <ul>
          {logement.equipments.map((equip, index) => (
            <li key={index}>{equip}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Tags</h3>
        <ul>
          {logement.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

