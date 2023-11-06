import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    setError("");

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setIsLoggedIn(true);
        } else {
          setError("Login failed. Please check your credentials.");
        }
      })
      .catch((err) => {
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>

      {isLoggedIn ? (
        <p>Logged in successfully!</p>
      ) : (
        error && <p>{error}</p>
      )}
    </div>
  );
}

export default Login;
