import { Link } from 'react-router-dom';
import './Pokemon.css';
import PropTypes from 'prop-types';

const Pokemon = ({ name, url,id }) => {
  return (
    <Link to={`/pokemon/${id}`} className="pokemon-frame" >
          <p className="pokemon-id">{id}
          </p>
          <img src={url} />
          <h3>{name}</h3>
      </Link>

  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Pokemon