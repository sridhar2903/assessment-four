import React from 'react'
import Header from './Assessment-four/Header';
import Home from './Assessment-four/Home';
import Student from './Assessment-four/Student';
import Contact from './Assessment-four/Contact';
import AddStudentInfo from './Assessment-four/AddStudentInfo';
import EditStudentinfo from './Assessment-four/EditStudentinfo';
import Error from './Assessment-four/Error';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import { StudentProvider } from './Assessment-four/StudentContextAPI';
const App = () => {
  return (
    <>
    <StudentProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Navigate to='/home'/>  }/>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student" element={<Student/>} />
          <Route path="/addstudentinfo" element={<AddStudentInfo/>} />
          <Route path="/student/edit/:userId" element={<EditStudentinfo/>} />
          <Route path="/*" element={<Error/>} />
        </Routes>
      </Router>
      </StudentProvider>
    </>
  )
}

export default App