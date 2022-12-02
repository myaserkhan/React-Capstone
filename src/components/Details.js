import React from 'react';
import { NavLink } from 'react-router-dom';
import pokeball from '../assets/pokeball.png';

function Details() {
  return (
    <NavLink to="/">
      <img src={pokeball} alt="" srcSet="" />
    </NavLink>
  );
}

export default Details;
