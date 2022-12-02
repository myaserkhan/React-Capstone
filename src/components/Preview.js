import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './stylesheets/Preview.scss';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Capitalize from './utils/Capitalize';

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
    <NavLink to="/pokemon/details/:id" className="box">
      <div>
        <h1>
          {pokemon.id < 10 ? (`0${pokemon.id}`) : pokemon.id}
        </h1>
        <img src={img} alt="" />
        <h2>
          {Capitalize(pokemon.name)}
        </h2>
      </div>

    </NavLink>
  );
}

Preview.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Preview;
