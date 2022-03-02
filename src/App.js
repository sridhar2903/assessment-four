import React from 'react'
import Header from './Assessment-four/Header';
import Home from './Assessment-four/Home';
import Student from './Assessment-four/Student';
import Contact from './Assessment-four/Contact';
import Error from './Assessment-four/Error';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student" element={<Student/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App