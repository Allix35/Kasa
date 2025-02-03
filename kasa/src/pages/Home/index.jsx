import '../../styles/components/cards.scss';
import '../../styles/pages/home.scss';
import Logements from '../../components/Cards';

export default function Home() {
  return (
    <div className="banner-elements">
      <div className="banner">
        <img 
          src="/src/assets/images/Imagesource1.png" 
          alt="Bannière" 
          className="banner-image"
        />
        <div className="banner-overlay"></div>
        <h1 className="banner-title">
          Chez vous, <span>partout et ailleurs</span>
        </h1>
      </div >
      <Logements />
    </div>
  );
}


  