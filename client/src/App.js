import { useState, useEffect } from "react";
import './css/App.css';
import Header from './Header.js';
import Login from "./Login.js"
import Logout from "./Logout.js"
import StatContainer from './StatContainer.js';
import BoxContainer from './BoxContainer.js';
import { useSelector } from "react-redux";
import { selectUser } from './features/userSlice'

function App() {
  const user = useSelector(selectUser);
  console.log(user)

  return (
    <div className="app">
      <Header />
      {user ? <Logout /> : <Login /> }
      {/* <Login />
      <Logout /> */}
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