import './App.css';
import React from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import NewArrivals from './components/Sections/NewArrivals';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NewArrivals />
    </div>
  );
}

export default App;
