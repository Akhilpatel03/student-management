import React, { useState, useEffect } from 'react'
import StudentContext from './StudentContext'
import axios from 'axios'

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const studentsPerPage = 5

  useEffect(() => {
    axios
      .get("/students.json")
      .then((response) => setStudents(response.data || []))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);
  
  const paginatedStudents = students.slice((currentPage - 1) * studentsPerPage,currentPage * studentsPerPage)

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id))
  }

  const addStudent = (newStudent) => {
    setStudents([...students, { id: students.length + 1, ...newStudent }])
  }

  return (
    <StudentContext.Provider value={{students,paginatedStudents,deleteStudent,addStudent,setCurrentPage,currentPage}}>
      {children}
    </StudentContext.Provider>
  )
}

export default StudentProvider
