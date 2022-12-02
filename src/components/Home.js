import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Header from './Header';
import Preview from './Preview';
import { fetchApi } from './redux/previewSlice';

function Home() {
  const pokemons = useSelector((state) => state.preview);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemons.length) dispatch(fetchApi());
  });
  return (
    <>
      <Header />
      {pokemons.map((pokemon) => (<Preview key={nanoid()} pokemon={pokemon} />))}
    </>
  );
}

export default Home;
