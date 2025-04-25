import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Artists from './components/Artists';
import Tickets from './components/Tickets';
import Merchandise from './components/Merchandise';
import Venue from './components/Venue';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="font-mono min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Artists />
      <Tickets />
      <Merchandise />
      <Venue />
      <Footer />
    </div>
  );
}

export default App;