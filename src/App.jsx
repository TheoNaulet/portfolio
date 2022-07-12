import './App.css';
import React from 'react';
import Navbar from './Components/navbar';
import Me from './Components/me';
import About from './Components/about';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Portfolio from './Components/portfolio';
import Bottom from './Components/bottom';

<style>
@import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
</style>;
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');
</style>;

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Me></Me>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Portfolio></Portfolio>
      <Bottom></Bottom>
      </div>
  );
}
export default App;