import "../../styles/pages/global.scss";
import "../../styles/components/home-cards.scss";
import "../../styles/components/home-banner.scss";
import HomeBanner from "../../components/HomeBanner";
import Logements from "../../components/HomeCards";

export default function Home() {
  return (
    <div className="banner-elements">
      <HomeBanner /> 
      <Logements />
    </div>
  );
}
