import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './stylesheets/Preview.scss';
import Capitalize from './utils/Capitalize';
import pokeball from '../assets/pokeball.png';

function Preview({ pokemon }) {
  const [img, setImg] = useState(pokeball);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
      setImg(response.data.sprites.other['official-artwork'].front_default);
    }
    fetchData();
  });
  return (
    <NavLink to={`/pokemon/details/${pokemon.id}`} className="box">
      <div className="oval">
        <h1>
          {pokemon.id < 10 ? (`0${pokemon.id}`) : pokemon.id}
        </h1>
        {pokemon.img ? (<img src={pokemon.img} alt="" />) : (<img src={img} alt="" />)}
        <h2>
          {Capitalize(pokemon.name)}
        </h2>
      </div>
    </NavLink>
  );
}

Preview.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default Preview;
