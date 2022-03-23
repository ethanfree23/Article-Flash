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

import Header from './Header.js';
import FlashcardList from './FlashcardList.js';
import Login from "./Login.js"
import Logout from "./Logout.js"
import StatContainer from './StatContainer.js';
import BoxContainer from './BoxContainer.js';

function App() {
  const user = useSelector(selectUser);
  // console.log(user)
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

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
      <Header />
      <>
        <Routes>
          <Route path="/" element={<FlashcardList flashcards={flashcards} />} />
        </Routes>
      </>
    </BrowserRouter>

    // <div>
    //   <Header />
    //   <div className="app__flashcardlist_container">
    //     <FlashcardList flashcards={flashcards} />
    //   </div>


    //   {user ? <Logout /> : <Login />}
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