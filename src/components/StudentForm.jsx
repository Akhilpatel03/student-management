import React, { useState, useContext } from 'react'
import StudentContext from '../context/StudentContext'


const StudentForm = () => {
  const { addStudent } = useContext(StudentContext)
  const [student, setStudent] = useState({name: '',email: '',class: '',age: '',address: '',phoneNumber: '',})
  const handleChange = (e) => {
    setStudent({...student,[e.target.name]: e.target.value,})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (student.name && student.email && student.class) {
      addStudent(student)
      setStudent({name: '',email: '',class: '',age: '',address: '',phoneNumber: '',})
    } else {
      console.log('Please fill the required fields')
    }
  }

  return (
    <form className="studentform" onSubmit={handleSubmit}>
      <h2>Register New Student</h2>
      <div className="formgroup">
        <label>Name</label>
        <input type="text" name="name" value={student.name} onChange={handleChange}  required/>
      </div>

      <div className="formgroup">
        <label>Email</label>
        <input type="email" name="email" value={student.email} onChange={handleChange} required/>
      </div>

      <div className="formgroup">
        <label>Class</label>
        <input type="text" name="class" value={student.class} onChange={handleChange} required/>
      </div>

      <div className="formgroup">
        <label>Age</label>
        <input type="number" name="age" value={student.age} onChange={handleChange}/>
      </div>

      <div className="formgroup">
        <label>Address</label>
        <input type="text" name="address" value={student.address} onChange={handleChange}/>
      </div>

      <div className="formgroup">
        <label>Phone Number</label>
        <input type="text" name="phoneNumber" value={student.phoneNumber} onChange={handleChange} />
      </div>

      <button type="submit" className="submitbtn">Register Student</button>
    </form>
  )
}

export default StudentForm
