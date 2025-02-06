import '../styles/components/about-banner.scss';

export default function AboutBanner() {
    return (
      <div className="about-banner">
        <img
          src="/src/assets/images/Imagesource2.png"
          alt="Bannière"
          className="about-banner-image"
        />
        <div className="banner-overlay"></div>
      </div>
    );
  }
  