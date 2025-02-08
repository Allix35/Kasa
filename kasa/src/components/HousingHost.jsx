import PropTypes from "prop-types";
import '../styles/components/housing-host.scss';

export default function HostInfo({ host }) {
  const [firstName, lastName] = host.name.split(" ");

  return (
    <div className="host-info">
      <div className="host-name">
        <p className="first-name">{firstName}</p>
        <p className="last-name">{lastName}</p>
      </div>
      <img src={host.picture} alt={host.name} className="host-image" />
    </div>
  );
}

HostInfo.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};
