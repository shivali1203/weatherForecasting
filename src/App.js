import logo from './logo.svg';
import './App.css';
import './style.css'
import { Forcast } from './Forcast';
import { NavBar } from './NavBar';
import { Route, Routes } from 'react-router-dom';
import { ForcastWather } from './ForcastWather';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Forcast/>}></Route>
        <Route path ="/forcast" element={<ForcastWather/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
