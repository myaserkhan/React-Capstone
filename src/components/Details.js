import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsHouseFill } from 'react-icons/bs';
import './stylesheets/Details.scss';
import pokeball from '../assets/pokeball.png';
// import Capitalize from './utils/Capitalize';

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
    <>
      <div className="detailsContainer">
        <NavLink to="/">
          <IconContext.Provider value={{ className: 'homeBtn' }}>
            <BsHouseFill />
          </IconContext.Provider>
        </NavLink>
        <img src={img} alt="" />
        <h2>
          {pokemon.name}
        </h2>

        {/* <div className="photos"> */}
        {/* {!pokemon */}
        {/* ? (<img src={pokemon.sprites.front_default} alt="" />) : (<img src={img} alt="" />)} */}
        {/* <img src={pokemon.sprites.back_default} alt="" />
          <img src={pokemon.sprites.front_shiny} alt="" />
          <img src={pokemon.sprites.back_shiny} alt="" /> */}
        {/* </div> */}
      </div>
      <div className="statsContainer">
        <table>
          <tr>
            <td className="property">
              ID:
            </td>
            <td className="info">
              {pokemon.id}
            </td>
          </tr>
          <tr>
            <td className="property">
              Name:
            </td>
            <td className="info">
              {pokemon.name}
            </td>
          </tr>
          <tr>
            <td className="property">
              Base Experience:
            </td>
            <td className="info">
              {pokemon.base_experience}
            </td>
          </tr>
          <tr>
            <td className="property">
              Height:
            </td>
            <td className="info">
              {pokemon.height}
            </td>
          </tr>
          <tr>
            <td className="property">
              Weight:
            </td>
            <td className="info">
              {pokemon.weight}
            </td>
          </tr>

        </table>
      </div>
    </>
  );
}

// Details.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Details;
