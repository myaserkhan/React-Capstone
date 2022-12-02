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
  const [img4, setImg4] = useState(pokeball);
  const [pokemon, setPokemon] = useState('');
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${params.id}`,
      );
      setImg(response.data.sprites.other['official-artwork'].front_default);
      setImg1(response.data.sprites.other['official-artwork'].front_default);
      setImg2(response.data.sprites.other.dream_world.front_default || pokeball);
      setImg3(response.data.sprites.other.home.front_default);
      setImg4(response.data.sprites.versions['generation-v']['black-white'].animated.front_default);
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
          <h2>
            {pokemon.name}
          </h2>
          <IconContext.Provider value={{ className: 'homeBtn' }}>
            <BsHouseFill />
          </IconContext.Provider>
        </NavLink>
        <img src={img} alt="" />

        <div className="photos">
          <img src={img1} alt="" aria-hidden="true" onClick={() => setImg(img1)} />
          <img src={img2} alt="" aria-hidden="true" onClick={() => setImg(img2)} />
          <img src={img3} alt="" aria-hidden="true" onClick={() => setImg(img3)} />
          {/* <img src={img4} alt="" aria-hidden="true" onClick={() => setImg(img4)} /> */}
        </div>
      </div>
      <div className="bottom">
        <ul className="statsContainer">
          <li className="property">
            Base XP:
            <span className="info">{pokemon.base_experience}</span>
          </li>
          <li className="property">
            Height:
            <span className="info">{pokemon.height}</span>
          </li>
          <li className="property">
            Weight:
            <span className="info">{pokemon.weight}</span>
          </li>
        </ul>
        <div className="gifPhotos">
          <img src={img4} alt="" aria-hidden="true" onClick={() => setImg(img4)} />
        </div>
        <footer>
          Copyright ©️ 2022
          <a href="https://github.com/myaserkhan">myaserkhan</a>
        </footer>
      </div>
    </>
  );
}

// Details.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Details;
