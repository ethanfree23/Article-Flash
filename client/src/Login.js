import React, { useState } from 'react'
import './css/Login.css';

import { login, logout } from './features/userSlice'
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'

function Login({ users }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("pending")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  function manageEmail(e) {
    const value = e.target.value;
    setEmail(value);
  }

  function managePassword(e) {
    const value = e.target.value;
    setPassword(value);
  }

  function manageLogin(e) {
    e.preventDefault();

    users.map((user) => {
      // console.log(user.name)
      // console.log(user.password)
      if (user.email === email && user.password === password) {
        navigate("/dashboard")
      } else {
        setStatus("rejected")
      }
    })
  }

  function manageRejection() {
    return (
      <h2>User Not Found</h2>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <form
        className="login__form"
        // onSubmit={manageLogin}
        onSubmit={manageLogin}
      >
        <h1>Login Here </h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={manageEmail}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={managePassword}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn">
          Submit
        </button>
      </form>
      {status === "rejected" && manageRejection()}
    </div>
  );
};

export default Login;