
import { useEffect, useState } from 'react'; {/* Using useEffect to get housing data & useState to empty and receive data */}
import { Link } from 'react-router-dom'; {/* links generate from react router */}
import logementsData from '../assets/logements.json'; 
import '../styles/components/home-cards.scss';

export default function Logements() {
  const [logements, setLogements] = useState([]); {/* use state logements to stock data housing received from JSON */}

  {/* Loading the housing from JSON with useEffect */}

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  return (
    <div className="housing-container">

  {/* using map to display each cards and link creation */}

      {logements.map((logement) => ( 
        <Link to={`/logement/${logement.id}`} key={logement.id} className="housing-card-link"> 
          <div className="housing-card">
            <img src={logement.cover} alt={logement.title} className="housing-image" />
            <h2 className="housing-title">{logement.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
