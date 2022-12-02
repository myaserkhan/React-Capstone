import React, { useState } from 'react';
import './stylesheets/Header.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';

function Header() {
  const pokemonList = useSelector((state) => state.preview);
  const [hidden, setHidden] = useState(false);
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

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
        </div>
        <div className="search">
          {hidden ? (
            <>
              <div className="searchField">
                <input
                  className="searchBar"
                  type="text"
                  placeholder="Search Pokemon Name or ID"
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
