import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="form-container">
        <h1>Login</h1>
        {error && <h2>Danger{error}</h2>}
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              className="input"
              placeholder="Kode"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit" className="signup-btn">
              Login
            </button>
          </form>
        </div>

        <div className="account">
          Dont have an account? <Link to="/signup">Sign Up here</Link>
        </div>
      </div>
    </div>
  );
}
