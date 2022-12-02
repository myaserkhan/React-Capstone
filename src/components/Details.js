import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';
import pokeball from '../assets/pokeball.png';

function Details() {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <NavLink to="/">
        <img src={pokeball} alt="" srcSet="" />
      </NavLink>
      <h1>{params.id}</h1>
    </div>
  );
}

// Details.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Details;
