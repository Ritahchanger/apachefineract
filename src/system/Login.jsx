import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("/fineract-provider/api/v1/authentication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Fineract-Platform-TenantId": "", 
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

    
     
      sessionStorage.setItem("isAuthenticated", true);

      alert("Login was successful");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="authentication">
      <p className="title">Login</p>
      <p className="title">APACHE FINERACT TESTING</p>

      <form className="login" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="LOGIN" />
        <Link to="/dashboard">Navigate to dashboard</Link>
      </form>
    </div>
  );
};

export default Login;
