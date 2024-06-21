/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try { 
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
     } catch (err) {
      console.log(err);
      setErr(err);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>

          <button>Sign In</button>
          {err && <span>Something went wrong</span>}
          <p>Not have an account?<Link to="/register">Register</Link> </p>

        </form>
      </div>
    </div>
  );
}

export default Login;
