import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IconContext } from 'react-icons';
import { RiCloseCircleFill } from 'react-icons/ri';
import './stylesheets/MoreDetails.scss';

function MoreDetails() {
  const [shown, setShown] = useState(true);
  // const [pokemon, setPokemon] = useState('');
  const [stat1, setStat1] = useState();
  const [statVal1, setStatVal1] = useState();
  const stats = [];
  const statsVal = [];
  const params = useParams();
  console.log(stats[0]);
  const clickHandler = () => {
    setShown(false);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${Number(params.id)}`,
      );
      // setPokemon(response.data);
      console.log(response.data.id);
      Object.values(response.data.stats).map((el) => stats.push(el.stat.name));
      Object.values(response.data.stats).map((el) => statsVal.push(el.base_stat));
      setStat1(stats[0]);
      setStatVal1(statsVal[0]);
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
              {`${stat1}:`}
              <span className="info">{statVal1}</span>
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

export default MoreDetails;
