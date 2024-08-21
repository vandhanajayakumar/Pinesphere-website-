import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import MyForm from './form';
import JobApplicationForm from './JobApplicationForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<MyForm />} />
          <Route path="/job-application" element={<JobApplicationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
