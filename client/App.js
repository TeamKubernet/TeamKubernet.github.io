//  Dependencies
import React from 'react';

//  Children components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Features />
    </React.Fragment>
  );
};

export default App;
