import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Details from './components/Details';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
