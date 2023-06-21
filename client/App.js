//  Dependencies
import React from 'react';

//  Children components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Team from './components/Team';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Features />
      <Team />
    </React.Fragment>
  );
};

export default App;
