import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Provider from './context/Provider';

import Login from './pages/Login';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Provider>
  );
}

export default App;
