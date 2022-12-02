import React from 'react';
import PropTypes from 'prop-types';

function Preview({ pokemon }) {
  return (
    <div>
      {pokemon.id}
      {pokemon.name}
    </div>
  );
}

Preview.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Preview;
