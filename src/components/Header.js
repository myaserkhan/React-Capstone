import React, { useState } from 'react';
import './stylesheets/Header.scss';
import { NavLink } from 'react-router-dom';
import pokeball from '../assets/pokeball.png';
import pokemonLogo from '../assets/pokemonLogo.png';

function Header() {
  const [hidden, setHidden] = useState(false);
  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      // const input = document.querySelector('.searchBar').value;
      console.log(input);
    }
  };
  document.addEventListener('keydown', enterHandler);
  // useEffect(() => {
  // }, []);

  return (
    <>
      <section className="header">
        <div className="title">
          <NavLink to="/"><img className="logo" src={pokemonLogo} alt="" /></NavLink>
        </div>
        <div className="search">
          {hidden ? (
            <>
              <input className="searchBar" type="text" placeholder="Search" onChange={inputHandler} />
              <button type="button" onClick={() => setHidden(false)}>
                <img className="ball" src={pokeball} alt="" />

              </button>
            </>
          )
            : (
              <button type="button" onClick={() => setHidden(true)}>
                <img className="ball" src={pokeball} alt="" />
              </button>
            )}
        </div>
      </section>
    </>
  );
}
export default Header;
