import React, { useState } from "react";
import { useUserAuth } from "../contexts/UserAuthContext";

export default function Home() {
  const { user, logOut } = useUserAuth();

  console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="form-container">
        <h1>Hello, and welcome {user && user.email}</h1>
        <div>
          <button onClick={handleLogout} className="signup-btn">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
