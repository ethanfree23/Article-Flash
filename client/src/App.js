import './css/App.css';
import { Container, Alert } from 'react-bootstrap'

import axios from 'axios';

import {
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { selectSet } from "./features/setsSlice";
import { selectCard } from './features/cardsSlice'
import { fetchArticles } from './features/articlesSlice'
import { useDispatch } from "react-redux";

import Login from './Login';
import Logout from "./Logout.js"
import Dashboard from "./Dashboard.js"
import FlashSets from "./FlashSets.js"
import Articles from './Articles.js';
import FunTrivia from './FunTrivia.js'
import SetList from './features/SetList.jsx'
import AddSet from './features/AddSet.jsx'
import EditSet from './features/EditSet.jsx'
import FlashcardsPage from "./FlashcardsPage.js"
import AddCard from './features/AddCard.jsx'
import EditCard from './features/EditCard.jsx'
import CardList from './features/CardList.jsx'

// import Header from './Header.js';
// import LoginForm from "./LoginForm.js"
// import Article from './Article.js';



function App() {
  //   const user = useSelector(selectUser);
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);
  const [sets, setSets] = useState([]);
  //   // const cards = useSelector(state => state.cards);
  // console.log(cards)
  const [funTrivia, setFunTrivia] = useState(SAMPLE_FLASHCARDS)

  //   // const dispatch = useDispatch();


  const navigate = useNavigate()

  useEffect(() => {
    // auto-login
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOutClick() {
    fetch("/logout", {
      method: "DELETE"
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    // Navigate to home page after logout and clear history
    navigate("/");
  }

  useEffect(() => {
    fetch("/flash_sets")
      .then((r) => r.json())
      .then((data) => setSets(data));
  }, []);

  function handleAddSet(newSet) {
    const newSetArray = [newSet, ...sets];
    setSets(newSetArray)
  };

  //   // useEffect(() => {
  //   //   dispatch(fetchArticles());
  //   // }, [dispatch]);

//  articles API
  useEffect(() => {
    fetch("http://localhost:8000/results")
      .then(r => {
        return r.json();
      })
      .then((data) => {
        // console.log(data);
        setArticles(data)
      })
  }, []);

  // Trivia cards API
  useEffect(() => {
    axios
    .get("https://opentdb.com/api.php?amount=12")
    .then(r => {
        setFunTrivia(r.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer)
          const options = [
            ...questionItem.incorrect_answers.map(a => decodeString(a)),
            answer
          ]
          return {
            id: `${index}-${Date.now}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - .5)
          }
        }))
      })
  }, [])

  // Trivia cards - edit words
  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  // if user does not exist
  if (!user) return (
    <>
      <Container>
        <Alert className="mt-3" variant="primary" >Login, or Signup!</Alert>
      </Container>
      <Login onLogin={setUser} />
    </>
  )

  return (
    <>
      {/* <NavBar user={user} handleLogOutClick={handleLogOutClick} /> */}
      <Routes>

        {/* Logout */}
        <Route path="/logout" element={<Logout sets={sets} />} />

        {/* Login */}
        <Route path="/login" element={<Login user={user} />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard sets={sets} />} />

        {/* My Sets */}
        <Route path="/my-sets" element={<FlashSets />} />

        {/* Articles */}
        <Route path="/my-articles" element={<Articles articles={articles} />} />

        {/* Fun Trivia */}
        <Route path="/fun-trivia" element={<FunTrivia funTrivia={funTrivia} />} />

        {/* Set List */}
        <Route path="/set-list" element={<SetList />} />
        <Route path="/add-set-set-list" element={<SetList />} />

        {/* Add Set */}
        <Route path="/add-set" element={<AddSet onAddSet={handleAddSet} />} />

        {/* Edit Set */}
        <Route path={'/edit-set/:id'} element={<EditSet />} />

        {/* Study Set */}
        <Route path={'/study-set/:id'} element={<FlashcardsPage />} />

        {/* Add Card */}
        <Route path="/add-card" element={<AddCard />} />

        {/* Edit Card */}
        <Route path={'/edit-card/:id'} element={<EditCard />} />

        {/* Card List */}
        <Route path="/card-list" element={<CardList />} />

        {/* Flashcards */}
        <Route path="/flashcards" element={<FlashcardsPage />} />


      </Routes>
    </>
  );
}

export default App;



const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "hacer",
    answer: "to do",
    options: [
      "to be",
      "to feel",
      "to learn",
      "to do"
    ]
  },
  {
    id: 2,
    question: "hablar",
    answer: "to speak",
    options: [
      "to grow",
      "to run",
      "to speak",
      "to fart"
    ]
  }
]



//           {/* Article */}
//           <Route path="/article" element={<Article />} />
