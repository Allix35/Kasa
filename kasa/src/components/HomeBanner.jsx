import '../styles/components/home-banner.scss';

export default function HomeBanner() {
  return (
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
    </div>
  );
}

