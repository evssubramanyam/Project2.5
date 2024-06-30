import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Form from "./components/Form";
import "./components/assets";
import Assets from "./components/assets";

var userIsRegistered = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Form register={userIsRegistered}/>} />
        <Route path="assets" element={<Assets/>} />        
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
