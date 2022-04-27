import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="form-container">
        <h1>Sign Up</h1>
        {error && <h2>Danger{error}</h2>}
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="input"
              placeholder="Email"
              required
              pattern="[a-zA-Z0-9._%+-]+@(cphbusiness.dk)"
              title="We only allow users with an cphbusiness.dk mail."
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              className="input"
              placeholder="Password"
              required
              pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
              title="Password must be minimum eight characters, at least one letter, one number and one special character:"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
        </div>

        <div className="account">
          Already have an account? <Link to="/">Login here</Link>
        </div>
      </div>
    </div>
  );
}
