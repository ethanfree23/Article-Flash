import './css/App.css';

import axios from 'axios';
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from './features/userSlice'
import { fetchArticles } from './features/articlesSlice'
import { useDispatch } from "react-redux";

import Login from "./Login.js"
import Dashboard from "./Dashboard.js"
import FlashSets from "./FlashSets.js"
import FlashCards from './Flashcards.js'
import Articles from './Articles.js';
import Article from './Article.js';

import Logout from "./Logout.js"


function App() {
  // const user = useSelector(selectUser);
  // console.log(user)
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);


  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then(r => {
        setFlashcards(r.data.results.map((questionItem, index) => {
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

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  return (
    <BrowserRouter>
      <>
        <Routes>

          {/* Login */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Sets */}
          <Route path="/my-sets" element={<FlashSets />} />

          {/* Flashcards */}
          <Route path="/flashcards" element={<FlashCards flashcards={flashcards} />} />

          {/* Articles */}
          <Route path="/my-articles" element={<Articles />} />

          {/* Article */}
          <Route path="/article" element={<Article />} />

          {/* Logout */}
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </>
    </BrowserRouter>

    // <div>
    //   <Header />
    //   <div className="app__flashcardlist_container">
    //     <FlashcardList flashcards={flashcards} />
    //   </div>


      // {user ? <Logout /> : <Login />}
    //   <div className="app__div_main">
    //     <h1 className="app__h1_welcome">Welcome to Article Flash!</h1>
    //     <h2>An article based knowledge improvement app for language learners...</h2>
    //     <StatContainer name="Ethan Freeman" country="USA" sets="17" />
    //     <BoxContainer type="Sets" />
    //     <BoxContainer type="Articles" />
    //   </div>
    // </div>
  );
}

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

export default App;