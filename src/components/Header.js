import React, { useState } from 'react';
import './stylesheets/Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';

function Header() {
  const [hidden, setHidden] = useState(false);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const searchHandler = () => {
    if (!input) return;
    navigate(`/pokemon/details/${input}`);
  };

  return (
    <>
      <section className="header">
        <div className="title">
          <Link to="/" style={{ textDecoration: 'none' }}><h1 className="titleText">POKEMON</h1></Link>
        </div>
        <div className="search">
          {hidden ? (
            <>
              <input className="searchBar" type="text" placeholder="Search" onChange={inputHandler} value={input} required />
              <button type="button" onClick={searchHandler}>
                <IconContext.Provider value={{ className: 'ball' }}>
                  <BsSearch />
                </IconContext.Provider>
              </button>
            </>
          )
            : (
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
