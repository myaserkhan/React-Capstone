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
  const [img1, setImg1] = useState(pokeball);
  const [img2, setImg2] = useState(pokeball);
  const [img3, setImg3] = useState(pokeball);
  const [pokemon, setPokemon] = useState('');
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${params.id}`,
      );
      setImg(response.data.sprites.other['official-artwork'].front_default);
      setImg1(response.data.sprites.other['official-artwork'].front_default);
      setImg2(response.data.sprites.other.dream_world.front_default);
      setImg3(response.data.sprites.other.home.front_default);
      setPokemon(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="detailsContainer">
        <NavLink to="/">
          <h1>
            {pokemon.id < 10 ? (`0${pokemon.id}`) : pokemon.id}
          </h1>
          <IconContext.Provider value={{ className: 'homeBtn' }}>
            <BsHouseFill />
          </IconContext.Provider>
        </NavLink>
        <img src={img} alt="" />

        <div className="photos">
          <img src={img1} alt="" aria-hidden="true" onClick={() => setImg(img1)} />
          <img src={img2} alt="" aria-hidden="true" onClick={() => setImg(img2)} />
          <img src={img3} alt="" aria-hidden="true" onClick={() => setImg(img3)} />
        </div>
      </div>
      <div className="statsContainer">
        <table>
          <thead>
            <tr>
              <td className="property" />
              <td className="info" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="property">Name:</td>
              <td className="info">{pokemon.name}</td>
            </tr>
            <tr>
              <td className="property">Base Experience:</td>
              <td className="info">{pokemon.base_experience}</td>
            </tr>
            <tr>
              <td className="property">Height:</td>
              <td className="info">{pokemon.height}</td>
            </tr>
            <tr>
              <td className="property">Weight:</td>
              <td className="info">{pokemon.weight}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

// Details.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Details;
