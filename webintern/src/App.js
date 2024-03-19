import React from 'react';
import { Route, Routes } from 'react-router-dom'
import MyTeam from './myteam/index.js'; // Adjust the path as needed
import './App.css';

function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<MyTeam />} /> 
      </Routes>
      </>
  );
}

export default App;
