import { useParams } from "react-router-dom";
import logementsData from "../../assets/logements.json";
import NotFound from "../NotFound";
import HousingCarrousel from "../../components/HousingCarrousel";
import HousingHeader from "../../components/HousingHeader";
import HostInfo from "../../components/HousingHost";
import Rating from "../../components/HousingRating";
import Collapse from "../../components/HousingCollapse";

import "../../styles/components/housing-header.scss";
import "../../styles/components/housing-host.scss";
import "../../styles/components/housing-rating.scss";
import "../../styles/components/housing-collapse.scss";
import "../../styles/components/housing-carrousel.scss";
import "../../styles/pages/global.scss";

export default function HousingForm() {

   {/* Get the params. id of URL and Searching the right housing from id in JSON file */}

  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  console.log("Logement trouvé :", logement);

  if (!logement) {
    return <NotFound />;
  }

  return (
    <div className="housing-form">

      {/* Checking pictures before displaying */}

      <HousingCarrousel slides={logement.pictures || []} />

      <div className="housing-content">

        {/* Housing Header */}
       
        <HousingHeader 
          title={logement.title || "Titre inconnu"} 
          location={logement.location || "Lieu inconnu"} 
          tags={logement.tags || []} 
        />

        {/* Rate & Host */}
       
        <div className="host-rating-container">
          <HostInfo host={logement.host || { name: "Hôte inconnu", picture: "" }} />
          <Rating rating={Number(logement.rating) || 0} />
        </div>

        {/* Collapse */}

        <div className="housing-collapse-container">
          <Collapse title="Description">
            {logement.description || "Aucune description disponible."}
          </Collapse>
          <Collapse title="Équipements">
            {logement.equipments && logement.equipments.length > 0 ? (
              <ul>
                {logement.equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
              </ul>
            ) : (
              <p>Aucun équipement disponible.</p>
            )}
          </Collapse>
        </div>
      </div>
    </div>
  );
}

