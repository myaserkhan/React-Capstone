import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './stylesheets/Preview.scss';
import axios from 'axios';

function Preview({ pokemon }) {
  const [img, setImg] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
      setImg(response.data.sprites.front_default);
    }
    fetchData();
  });
  return (
    <div className="box">
      <img src={img} alt="" />
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
