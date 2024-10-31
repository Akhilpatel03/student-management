import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import StudentProvider from '../context/StudentProvider'
import Dashboard from './Dashboard'
import StudentList from './StudentList'
import StudentForm from './StudentForm'

const Main = () => {
  return (
    <Router>
      <StudentProvider>
        <div className="app">
          <nav>
            <a href="/">Dashboard</a>
            <a href="/students">Students</a>
            <a href="/register">Register Student</a>
          </nav>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/students" element={<StudentList/>} />
            <Route path="/register" element={<StudentForm/>} />
          </Routes>
        </div>
      </StudentProvider>
    </Router>
  )
}

export default Main
