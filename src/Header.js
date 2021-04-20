import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useHistory } from "react-router-dom";

export default function Header() {
  const { currentUser, logout } = useAuth();
  const { history } = useHistory();
  const [error, setError] = useState();

  const handleLogout = async (e) => {
    setError("");
    e.preventDefault();
    try {
      await logout();
      history.push("/login");
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };
  console.log(currentUser);
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <h1>Catering</h1>
        <button
          disabled={currentUser ? false : true}
          class="btn btn-link"
          onClick={handleLogout}
        >
          Signout
        </button>
      </nav>
    </div>
  );
}
