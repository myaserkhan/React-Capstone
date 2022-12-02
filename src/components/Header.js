import React, { useState } from 'react';
import './stylesheets/Header.scss';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
// import pokemonLogo from '../assets/pokemonLogo.png';

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
          <Link to="/" style={{ textDecoration: 'none' }}><h1 className="titleText">POKEMON</h1></Link>
        </div>
        <div className="search">
          {hidden ? (
            <>
              <input className="searchBar" type="text" placeholder="Search" onChange={inputHandler} />
              <button type="button" onClick={() => setHidden(false)}>

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
