import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Repos from './routes/Repos';
import Instructions from './routes/Instructions';
import Factorial from './routes/Factorial';
import GlobalStyle from './assets/styles/globalStyles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="repos" element={<Repos />} />
        <Route path="instructions" element={<Instructions />} />
        <Route path="factorial" element={<Factorial />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
