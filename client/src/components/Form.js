import React, { useState } from "react";
import axios from "axios";

function Form(props) {
  const [mailId, setMailId] = useState(""); // State for mailId input
  const [password, setPassword] = useState(""); // State for password input
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password input

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = props.register ? "/login" : "/register";
    try {
      const response = await axios.post(endpoint, {
        email: mailId,
        password
      });
      console.log("Server response:", response.data);
      // Handle success (e.g., redirect to dashboard)
    } catch (error) {
      console.error("Error connecting to server:", error.message);
      // Handle error (e.g., display error message)
    }
  };

  return (
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
      {!props.register && (
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      )}

      <button type="submit">{props.register ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;