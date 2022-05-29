
import { Outlet } from 'react-router-dom';
import Navbar from './layouts/nav/Navbar';
import styled from 'styled-components';
import Button from './components/Button';
import { device } from './assets/styles/devices';

function App() {

  return (
    <div className='wrapper'>
      <Navbar />
       <MainPageText>
        <p>Cześć!</p>
        <p>Zapraszam</p>
        <p>do zapoznania się z moim zadaniem rekrutacyjnym </p>
        <Button/>
       </MainPageText>
      <Outlet />
    </div>
  );
}

const MainPageText = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 0 15px;

  p {
    text-align: center;
  }

  p:nth-of-type(1) {
      font-size: 25px;
      letter-spacing: 5px;
      text-transform: uppercase;
    }
    p:nth-of-type(2) {
      font-size: 40px;
      font-weight: bold;
      text-transform: uppercase;
    }
    p:nth-of-type(3) {
      font-size: 16px;
    } 

  @media ${device.laptop} {
    p:nth-of-type(1) {
      font-size: 50px;
      letter-spacing: 5px;
    }
    p:nth-of-type(2) {
      font-size: 100px;
      font-weight: bold;
    }
    p:nth-of-type(3) {
      font-size: 20px;
    }    
  }
`

export default App;
