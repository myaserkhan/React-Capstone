import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
import { MdKeyboardVoice } from 'react-icons/md';
import './stylesheets/Header.scss';
import { useSelector } from 'react-redux';
import pokeball from '../assets/pokeball.png';

function Header() {
  const pokemonList = useSelector((state) => state.preview);
  const [hidden, setHidden] = useState(false);
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const [img, setImg] = useState(pokeball);
  const [name, setName] = useState('?');
  const [shown, setShown] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const random = Math.floor(Math.random() * 150) + 1;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`);
      setName(response.data.name);
      setImg(response.data.sprites.versions['generation-v']['black-white'].animated.front_default);
    }
    fetchData();
  }, []);

  const filter = (value) => {
    const list = [...pokemonList];
    const filteredData = list.filter((el) => ((el.name.includes(value))));
    if (filteredData.length) setSearch(value);
    if (filteredData.length === 1) setSearch(filteredData[0].name);
  };

  const inputHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);
    filter(value);
  };

  const searchHandler = () => {
    if (input > 898) return;
    if (!input) return;
    navigate(`/pokemon/details/${input}`);
  };

  const focusHandler = () => {
    setFocus(true);
  };

  return (
    <>
      <section className="header">
        <div className="title">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className="titleText">POKEMON</h1>
          </Link>
          <img className="logo" src={img} alt="" onMouseEnter={() => setShown(true)} onMouseLeave={() => setShown(false)} />
          {shown && <p>{name}</p>}
        </div>
        <div className="search">
          <button type="button" onClick={() => setHidden(true)}>
            <IconContext.Provider value={{ className: 'ball' }}>
              <MdKeyboardVoice />
            </IconContext.Provider>
          </button>
          {hidden ? (
            <>
              <div className="searchField">
                <input
                  className="searchBar"
                  type="text"
                  placeholder="Search Name or ID"
                  onChange={inputHandler}
                  onFocus={focusHandler}
                  value={input}
                  required
                />
                {focus && input ? (
                  <span className="searchResults">
                    Best result:
                    {<NavLink to={`/pokemon/details/${search}`}>{search}</NavLink> || null}
                  </span>
                ) : null}
              </div>
              <button type="button" onClick={searchHandler}>
                <IconContext.Provider value={{ className: 'ball' }}>
                  <BsSearch />
                </IconContext.Provider>
              </button>
            </>
          ) : (
            <button type="button" onClick={() => setHidden(true)}>
              <IconContext.Provider value={{ className: 'ball' }}>
                <BsSearch />
              </IconContext.Provider>
            </button>
          )}
        </div>
      </section>
    </>
  );
}
export default Header;
