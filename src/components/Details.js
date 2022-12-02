import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsHouseFill } from 'react-icons/bs';
import './stylesheets/Details.scss';
import pokeball from '../assets/pokeball.png';

function Details() {
  const [img, setImg] = useState(pokeball);
  const [pokemon, setPokemon] = useState('');
  const params = useParams();
  console.log(pokemon);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
      setImg(response.data.sprites.other['official-artwork'].front_default);
      setPokemon(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <NavLink to="/">
        <IconContext.Provider value={{ className: 'homeBtn' }}>
          <BsHouseFill />
        </IconContext.Provider>
      </NavLink>
      <h1>{params.id}</h1>
      <img src={img} alt="" />
    </div>
  );
}

// Details.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Details;
