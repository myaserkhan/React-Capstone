import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from './redux/previewSlice';
import Header from './Header';
import Preview from './Preview';
import MainPreview from './MainPreview';
import './stylesheets/Home.scss';

function Home() {
  const pokemons = useSelector((state) => state.preview);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemons.length) dispatch(fetchApi());
  });

  return (
    <>
      <Header />
      <MainPreview />
      <h3>POKEMON BY ID</h3>
      <section className="list">
        {pokemons.map((pokemon) => (<Preview key={pokemon.id} pokemon={pokemon} />))}
      </section>
    </>
  );
}

export default Home;
