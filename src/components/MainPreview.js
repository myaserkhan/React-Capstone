import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './stylesheets/MainPreview.scss';
import pokeball from '../assets/pokeball.png';

function MainPreview() {
  const [img, setImg] = useState(pokeball);
  const [ID, setID] = useState();
  const randomID = () => Math.floor(Math.random() * 897 + 1);
  const id = randomID();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );
      setID(response.data.id);
      setImg(response.data.sprites.other['official-artwork'].front_default);
    }
    fetchData();
  }, []);

  const random = () => {
    const random = Math.floor(Math.random() * (55 - 43) + 43);
    return { backgroundColor: `hsl(219,45%,${random}%)`, textDecoration: 'none' };
  };

  return (
    <NavLink to={`/pokemon/details/${ID}`} className="guessBox" style={random}>
      <div className="guessOval">
        <h1>{ID < 10 ? `0${ID}` : ID}</h1>
        <img src={img} alt="" />
      </div>
      <h2 className="subtitle">Who&apos;s this POKEMON?</h2>
    </NavLink>
  );
}

export default MainPreview;
