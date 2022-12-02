import React, { useState } from 'react';
import './stylesheets/Header.scss';
import { TbPokeball } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';

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
          <h1>
            Pokémon
          </h1>
          <IconContext.Provider
            value={{ className: 'riGlobe' }}
          >
            <TbPokeball />
          </IconContext.Provider>
        </div>
        <div className="search">
          {hidden ? (
            <>
              <input className="searchBar" type="text" placeholder="Search" onChange={inputHandler} />
              <button type="button" onClick={() => setHidden(false)}>
                <IconContext.Provider
                  value={{ className: 'riSearch' }}
                >
                  <BsSearch />
                </IconContext.Provider>
              </button>
            </>
          )
            : (
              <button type="button" onClick={() => setHidden(true)}>
                <IconContext.Provider
                  value={{ className: 'riSearch' }}
                >
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
