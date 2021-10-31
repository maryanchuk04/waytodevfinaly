import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header.js';
import MainBaner from './components/MainBaner.js';
import MainCourses from './components/MainCourses.js';
import NewPosts from './components/NewPosts.js';
import Social from './components/Social';
import Footer from './components/Footer';
import AboutLang from './components/AboutLang';
function App() {
  return (
    <div className="app">
      <Header/>
      <MainBaner/>
      <MainCourses/>
      <NewPosts/>
      <Social/>
      <AboutLang/>
      <Footer/>
    </div>
  );
}

export default App;
