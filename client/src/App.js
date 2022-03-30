import React, { useEffect, useState } from "react";
import Login from './Login';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container, Alert } from 'react-bootstrap'
import NavBar from './Header';

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOutClick(){
    fetch("/logout",{
        method: "DELETE"
    }).then((r) => {
        if(r.ok){
            setUser(null);
        }
    });
    // Navigate to home page after logout and clear history
    navigate("/");
}

  if (!user) return (
    <>
    <Container>
      <Alert className="mt-3" variant="primary" >Please Login OR Signup To Create A New Account</Alert>
    </Container>
    <Login onLogin={setUser}/>
    </>
  )

  return (
    <div>
    <NavBar user={user} handleLogOutClick={handleLogOutClick} />
      // [Some routes ...]
    </div>
  );
}

export default App;

// import './css/App.css';

// import axios from 'axios';
// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useNavigate,
// } from "react-router-dom";
// import { selectUser } from "./features/userSlice";
// import { useSelector } from "react-redux";
// import { selectCard } from './features/cardsSlice'
// import { fetchArticles } from './features/articlesSlice'
// import { useDispatch } from "react-redux";
// import {Container, Alert} from 'react-bootstrap';

// import Header from './Header.js';
// import AddCard from './features/AddCard.jsx'
// import EditCard from './features/EditCard.jsx'
// import CardList from './features/CardList.jsx'
// import AddSet from './features/AddSet.jsx'
// import EditSet from './features/EditSet.jsx'
// import SetList from './features/SetList.jsx'
// import LoginForm from "./LoginForm.js"
// import Dashboard from "./Dashboard.js"
// import FlashSets from "./FlashSets.js"
// import FlashcardsPage from "./FlashcardsPage.js"
// import FunTrivia from './FunTrivia.js'
// import Articles from './Articles.js';
// import Article from './Article.js';

// import Logout from "./Logout.js"


// function App() {
//   const user = useSelector(selectUser);
//   const [users, setUsers] = useState(null);
//   // const [articles, setArticles] = useState([]);
//   // const [sets, setSets] = useState([]);
//   // const cards = useSelector(state => state.cards);
//   // console.log(cards)
//   // const [funTrivia, setFunTrivia] = useState(SAMPLE_FLASHCARDS)

//   const navigate = useNavigate();

//   // const dispatch = useDispatch();

//   useEffect(() => {
//     // auto-login
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUsers(user));
//       }
//     });
//   }, []);

//   function handleLogOutClick() {
//     fetch("/logout", {
//       method: "DELETE"
//     }).then((r) => {
//       if (r.ok) {
//         setUsers(null);
//       }
//     });
//     // Navigate to home page after logout and clear history
//     navigate("/");
//   }

//   if (!user) return (
//     <>
//     <Container>
//       <Alert className="mt-3" variant="primary" >Please LoginForm OR Signup To Create A New Account</Alert>
//     </Container>
//     <LoginForm onLogin={setUsers}/>
//     </>
//   )

//   return (
//     <div>
//     <Header user={users} handleLogOutClick={handleLogOutClick} />
//       // [Some routes ...]
//     </div>
//   );
// }

//   // useEffect(() => {
//   //   fetch("/users")
//   //     .then((r) => r.json())
//   //     .then((data) => setUsers(data));
//   // }, []);


//   // useEffect(() => {
//   //   fetch("/flash_sets")
//   //     .then((r) => r.json())
//   //     .then((data) => setSets(data));
//   // }, []);

//   // function handleAddSet(newSet) {
//   //   const newSetArray = [newSet, ...sets];
//   //   setSets(newSetArray)
//   // };

//   // useEffect(() => {
//   //   dispatch(fetchArticles());
//   // }, [dispatch]);


//   // useEffect(() => {
//   //   fetch("http://localhost:8000/results")
//   //     .then(r => {
//   //       return r.json();
//   //     })
//   //     .then((data) => {
//   //       // console.log(data);
//   //       setArticles(data)
//   //     })
//   // }, []);

//   // useEffect(() => {
//   //   axios
//   //     .get("https://opentdb.com/api.php?amount=12")
//   //     .then(r => {
//   //       setFunTrivia(r.data.results.map((questionItem, index) => {
//   //         const answer = decodeString(questionItem.correct_answer)
//   //         const options = [
//   //           ...questionItem.incorrect_answers.map(a => decodeString(a)),
//   //           answer
//   //         ]
//   //         return {
//   //           id: `${index}-${Date.now}`,
//   //           question: decodeString(questionItem.question),
//   //           answer: answer,
//   //           options: options.sort(() => Math.random() - .5)
//   //         }
//   //       }))
//   //     })
//   // }, [])

//   // function decodeString(str) {
//   //   const textArea = document.createElement('textarea')
//   //   textArea.innerHTML = str
//   //   return textArea.value
//   // }

// //   if (!user) return (
// //     <>
// //       <LoginForm onLogin={setUsers} />
// //     </>
// //   )

// //   return (
// //     <BrowserRouter>
// //       <>
// //         <Routes>

// //           {/* Add Card */}
// //           <Route path="/add-card" element={<AddCard />} />

// //           {/* Edit Card */}
// //           <Route path={'/edit-card/:id'} element={<EditCard />} />

// //           {/* Card List */}
// //           <Route path="/card-list" element={<CardList />} />

// //           {/* Add Set */}
// //           <Route path="/add-set" element={<AddSet onAddSet={handleAddSet} />} />
// //           <Route path="/add-set-set-list" element={<SetList />} />

// //           {/* Edit Set */}
// //           <Route path={'/edit-set/:id'} element={<EditSet />} />

// //           {/* Study Set */}
// //           <Route path={'/study-set/:id'} element={<FlashcardsPage />} />

// //           {/* Set List */}
// //           <Route path="/set-list" element={<SetList />} />

// //           {/* Dashboard */}
// //           <Route path="/dashboard" element={<Dashboard sets={sets} />} />

// //           {/* Sets */}
// //           <Route path="/my-sets" element={<FlashSets />} />

// //           {/* Flashcards */}
// //           <Route path="/flashcards" element={<FlashcardsPage />} />

// //           {/* Fun Trivia */}
// //           <Route path="/fun-trivia" element={<FunTrivia funTrivia={funTrivia} />} />

// //           {/* Articles */}
// //           <Route path="/my-articles" element={<Articles articles={articles} />} />

// //           {/* Article */}
// //           <Route path="/article" element={<Article />} />

// //           {/* Article */}
// //           {/* <Route path="/fun-trivia" element={<FunTrivia funTrivia={funTrivia}/>} /> */}

// //           {/* Logout */}
// //           <Route path="/logout" element={<Logout />} />

// //         </Routes>
// //       </>
// //     </BrowserRouter>

// //     // <div>
// //     //   <Header />
// //     //   <div className="app__flashcardlist_container">
// //     //     <FlashcardList flashcards={flashcards} />
// //     //   </div>


// //     // {user ? <Logout /> : <LoginForm />}
// //     //   <div className="app__div_main">
// //     //     <h1 className="app__h1_welcome">Welcome to Article Flash!</h1>
// //     //     <h2>An article based knowledge improvement app for language learners...</h2>
// //     //     <StatContainer name="Ethan Freeman" country="USA" sets="17" />
// //     //     <BoxContainer type="Sets" />
// //     //     <BoxContainer type="Articles" />
// //     //   </div>
// //     // </div>
// //   );
// // }

// // const SAMPLE_FLASHCARDS = [
// //   {
// //     id: 1,
// //     question: "hacer",
// //     answer: "to do",
// //     options: [
// //       "to be",
// //       "to feel",
// //       "to learn",
// //       "to do"
// //     ]
// //   },
// //   {
// //     id: 2,
// //     question: "hablar",
// //     answer: "to speak",
// //     options: [
// //       "to grow",
// //       "to run",
// //       "to speak",
// //       "to fart"
// //     ]
// //   }
// // ]

// export default App;


// class CreateUsers < ActiveRecord::Migration[7.0]
//   def change
//     create_table :users do |t|
//       t.string :username
//       t.string :password
//       t.string :address
//       t.string :email
//       t.string :phone

//       t.timestamps
//     end
//   end
// end
