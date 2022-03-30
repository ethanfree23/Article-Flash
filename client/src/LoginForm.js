import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap'

function LoginForm({onLogin}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        }).then ((r) => {
            setIsLoading(false);
            if (r.ok){
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    
    return (
        <Container>
            <h1>Article Flash</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        id="email" 
                        type="email" 
                        placeholder="Enter email" 
                        autoComplete="off"
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        id="password" 
                        type="password" 
                        placeholder="Password" 
                        autoComplete="current-password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="dark" type="submit">{isLoading ? "Loading..." : "Login"}</Button>
                {errors?.map(error => (
                    <Alert className="mt-3" variant="danger" key={error}>{error}</Alert>
                ))}
            </Form>
        </Container>
    )
}

export default LoginForm;


// import React, { useState } from 'react'
// import './css/LoginForm.css';

// import { login, logout } from './features/userSlice'
// import { useDispatch } from 'react-redux'

// import { useNavigate } from 'react-router-dom'

// function LoginForm({ users }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [status, setStatus] = useState("pending")

//   console.log(users)

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   localStorage.setItem('email', email);
//   localStorage.setItem('password', password);

//   function manageEmail(e) {
//     const value = e.target.value;
//     setEmail(value);
//   }

//   function managePassword(e) {
//     const value = e.target.value;
//     setPassword(value);
//   }

//   function manageLogin(e) {
//     e.preventDefault();

//     users.map((user) => {
//       // console.log(user.name)
//       // console.log(user.password)
//       if (user.email === email && user.password === password) {
//         navigate("/dashboard")
//       } else {
//         setStatus("rejected")
//       }
//     })
//   }

//   function manageRejection() {
//     return (
//       <h2>User Not Found</h2>
//     )
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(
//       login({
//         name: name,
//         email: email,
//         password: password,
//         loggedIn: true,
//       })
//     );

//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="login">
//       <form
//         className="login__form"
//         // onSubmit={manageLogin}
//         onSubmit={manageLogin}
//       >
//         <div >
//           <h1 className="login__text">Login Here </h1>
//         </div>
//         <input
//           type="name"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={manageEmail}
//         // onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={managePassword}
//         // onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" className="submit__btn">
//           Submit
//         </button>
//       </form>
//       {status === "rejected" && manageRejection()}
//     </div>
//   );
// };

// export default LoginForm;