
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './layouts/nav/Navbar';

function App() {

  return (
    <div className='wrapper'>
      <Navbar />
      <h1>Wybierz</h1>
      <Outlet />
    </div>
  );
}

export default App;
