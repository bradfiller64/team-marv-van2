import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Story from './components/Story';
import Characters from './components/Characters';
import CharacterBio from './components/CharacterBio';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterBio />} />
      </Routes>
    </Router>
  );
}

export default App;
