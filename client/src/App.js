import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Form from "./components/Form";

var userIsRegistered = false;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="signup" element={<Form register={userIsRegistered}/>} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
