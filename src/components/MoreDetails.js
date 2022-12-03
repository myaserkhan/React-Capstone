import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IconContext } from 'react-icons';
import { RiCloseCircleFill } from 'react-icons/ri';
import './stylesheets/MoreDetails.scss';

function MoreDetails() {
  const [shown, setShown] = useState(true);
  const [stat0, setStat0] = useState();
  const [stat1, setStat1] = useState();
  const [stat2, setStat2] = useState();
  const [stat3, setStat3] = useState();
  const [stat4, setStat4] = useState();
  const [stat5, setStat5] = useState();
  const [statVal0, setStatVal0] = useState();
  const [statVal1, setStatVal1] = useState();
  const [statVal2, setStatVal2] = useState();
  const [statVal3, setStatVal3] = useState();
  const [statVal4, setStatVal4] = useState();
  const [statVal5, setStatVal5] = useState();
  const stats = [];
  const statsVal = [];
  const params = useParams();
  const clickHandler = () => {
    setShown(false);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${Number(params.id)}`,
      );
      Object.values(response.data.stats).map((el) => stats.push(el.stat.name));
      Object.values(response.data.stats).map((el) => statsVal.push(el.base_stat));
      setStat0(stats[0]);
      setStat1(stats[1]);
      setStat2(stats[2]);
      setStat3(stats[3]);
      setStat4(stats[4]);
      setStat5(stats[5]);
      setStatVal0(statsVal[0]);
      setStatVal1(statsVal[1]);
      setStatVal2(statsVal[2]);
      setStatVal3(statsVal[3]);
      setStatVal4(statsVal[4]);
      setStatVal5(statsVal[5]);
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
              {`${stat0}:`}
              <span className="info">{statVal0}</span>
            </li>
            <li className="property">
              {`${stat1}:`}
              <span className="info">{statVal1}</span>
            </li>
            <li className="property">
              {`${stat2}:`}
              <span className="info">{statVal2}</span>
            </li>
            <li className="property">
              {`${stat3}:`}
              <span className="info">{statVal3}</span>
            </li>
            <li className="property">
              {`${stat4}:`}
              <span className="info">{statVal4}</span>
            </li>
            <li className="property">
              {`${stat5}:`}
              <span className="info">{statVal5}</span>
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
