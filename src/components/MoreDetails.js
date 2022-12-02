import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { IconContext } from 'react-icons';
import { RiCloseCircleFill } from 'react-icons/ri';
import './stylesheets/MoreDetails.scss';

function MoreDetails(props) {
  const [shown, setShown] = useState(true);
  // const [stat1, setStat1] = useState();
  // const [pokemon, setPokemon] = useState();
  // const stats = [];
  const { id } = props;

  const clickHandler = () => {
    setShown(false);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );
      // setPokemon(response.data);
      console.log(response.data);
      // Object.values(response.data.stats).map((el) => stats.push(el.stat.name));
      // setStat1(stats[0]);
    }
    fetchData();
  }, []);

  return (
    <>
      {shown ? (
        <section className="background">
          <button className="closeBtn" type="button" onClick={clickHandler}>
            <IconContext.Provider value={{ className: 'closeIcon' }}>
              <RiCloseCircleFill />
            </IconContext.Provider>
          </button>
          <ul className="statsContainer">
            <li className="property">
              Name:
              {/* <span className="info">{pokemon.name}</span> */}
            </li>
          </ul>
        </section>
      ) : (
        <button type="button" onClick={() => setShown(true)}>
          More Details...
        </button>
      )}
    </>
  );
}

MoreDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MoreDetails;
