import { useParams } from 'react-router-dom';

export default function FicheLogement() {
  const { id } = useParams(); 
  console.log('ID reçu :', id);

  return <h1>Fiche Logement - ID : {id}</h1>;
}

  