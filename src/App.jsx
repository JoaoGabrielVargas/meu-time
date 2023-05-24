import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Provider from './context/Provider';
import './index.css';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
