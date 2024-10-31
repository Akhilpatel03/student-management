import React, { useContext, useState } from 'react'
import StudentContext from '../context/StudentContext'

const StudentList = () => {
  const {paginatedStudents, deleteStudent, setCurrentPage, currentPage } = useContext(StudentContext)
  const [searchTerm, setSearchTerm] = useState('')

  const handleDelete = (id) => {
    deleteStudent(id)
  }

  const filteredStudents = paginatedStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="studentlist">
      <input type="text" placeholder="Search by name" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="searchinput"/>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>
                <button className="deletebtn" onClick={() => handleDelete(student.id)}>Delete</button>
                <button className="editbtn">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className="paginationbtn" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <button className="paginationbtn" onClick={() => setCurrentPage(currentPage + 1)} >Next</button>
      </div>
    </div>
  )
}

export default StudentList
