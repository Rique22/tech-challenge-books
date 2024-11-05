import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
