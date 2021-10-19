import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header.js';
import MainBaner from './components/MainBaner.js';
import MainCourses from './components/MainCourses.js';
import NewPosts from './components/NewPosts.js';

function App() {
  return (
    <div className="app">
      <Header/>
      <MainBaner/>
      <MainCourses/>
      <NewPosts/>
    </div>
  );
}

export default App;
