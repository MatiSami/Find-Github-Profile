import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import Repos from './routes/Repos';
import Instructions from './routes/Instructions';
import Factorial from './routes/Factorial';
import GlobalStyle from './assets/styles/globalStyles';
import Footer from './layouts/footer/Footer';
import Navbar from './layouts/nav/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <React.StrictMode>
        <GlobalStyle/>
        <BrowserRouter>
        <Navbar/>        
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="repos" element={<Repos />} />
            <Route path="instructions" element={<Instructions />} />
            <Route path="factorial" element={<Factorial />} />
          </Routes>
        <Footer/>          
        </BrowserRouter>
      </React.StrictMode>          
  </Provider>

);
