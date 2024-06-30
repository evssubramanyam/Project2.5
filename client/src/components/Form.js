import React, { useState } from "react";
import axios from "axios";
import "../Form.css"; // Importing the CSS file

function Form() {
  const [isLogin, setIsLogin] = useState(true);
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!mailId || !password || (!isLogin && !confirmPassword)) {
      setError("Please fill in all fields.");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const endpoint = isLogin ? "/login" : "/register";
    try {
      const response = await axios.post(endpoint, {
        email: mailId,
        password,
      });
      setSuccessMessage("Success! Redirecting...");
      console.log("Server response:", response.data);
      // Handle success (e.g., redirect to dashboard)
    } catch (error) {
      setError(error.response ? error.response.data.message : "Error connecting to server.");
      console.error("Error connecting to server:", error.message);
      // Handle error (e.g., display error message)
    }
  };

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setError("");
    setSuccessMessage("");
    setMailId("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Mail Id"
          value={mailId}
          onChange={(e) => setMailId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLogin && (
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}

        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <button className="toggle-button" onClick={toggleForm}>
        {isLogin ? "Switch to Signup" : "Switch to Login"}
      </button>
    </div>
  );
}

export default Form;
