import { useState, useEffect } from "react";
import './App.css';
import StatContainer from './StatContainer.js';
import BoxContainer from './BoxContainer.js';
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.account);

  console.log(state)

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://ik.imagekit.io/ethanfree/Article_Flash/Article_Flash_logo_-_updated_hUqFPkQpRFdX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647403428699"
          alt=""
        />
      </div>
      <div className="app__div_main">
        <h1 className="app__h1_welcome">Welcome to Article Flash!</h1>
        <h2>An article based knowledge improvement app for language learners...</h2>
        <StatContainer name="Ethan Freeman" country="USA" sets="17" />
        <BoxContainer type="Sets" />
        <BoxContainer type="Articles" />
      </div>
    </div>
  );
}

export default App;