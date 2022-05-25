
import { Outlet } from 'react-router-dom';
import SectionTitle from './components/SectionTitle';
import Navbar from './layouts/nav/Navbar';

function App() {

  return (
    <div className='wrapper'>
      <Navbar />
      <SectionTitle title="Wybierz z menu co chciałbyś zrobić"/>
      <Outlet />
    </div>
  );
}

export default App;
