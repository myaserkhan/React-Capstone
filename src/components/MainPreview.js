import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './stylesheets/MainPreview.scss';
import pokeball from '../assets/pokeball.png';

function MainPreview() {
  const answer = useRef(null);
  const [img, setImg] = useState(pokeball);
  const [name, setName] = useState();
  const [check, setCheck] = useState(false);
  const [input, setInput] = useState();
  const [ID, setID] = useState();
  const randomID = () => Math.floor(Math.random() * 150 + 1);
  const id = randomID();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );
      setID(response.data.id);
      setName(response.data.name);
      setImg(response.data.sprites.other['official-artwork'].front_default);
    }
    fetchData();
  }, []);

  const changeHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === answer.current.value) return setCheck(true);
    answer.current.value = '';
    return null;
  };

  return (
    <section className="container">
      <NavLink to={`/pokemon/details/${ID}`} className="guessBox" style={{ textDecoration: 'none' }}>
        <div className="guessOval">
          <h1>{ID < 10 ? `0${ID}` : ID}</h1>
          {check ? (<img className="reveal" src={img} alt="" />) : (<img className="hide" src={img} alt="" />)}
        </div>
        <h2 className="subtitle">Who&apos;s that POKEMON?</h2>
      </NavLink>
      <form onSubmit={submitHandler}>
        <input type="text" ref={answer} placeholder="Type your Guess here" onChange={changeHandler} value={input} />
        <button type="submit">Check Answer</button>
      </form>
    </section>
  );
}

export default MainPreview;
