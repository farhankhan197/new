import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';  
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm/>} />
    </Routes>
  </Router>
  )
}

export default App;
