import React, { useState } from 'react'



const App = () => {

  

  const [information, setinformation] = useState([{
    Name: "Abdul",
    FatherName: "Khalid",
    Class: "A+",
    Position: "Basic",
    Exam: "passed"
  }, {
    Name: "Khalid",
    FatherName: "Walid",
    Class: "Network+",
    Position: "advance",
    Exam: "pending"
  }, {
    Name: "Ahmad",
    FatherName: "Mahmood",
    Class: "Security+",
    Position: "Expert",
    Exam: "Failed"
  }, {
    Name: "Abdul",
    FatherName: "Khalid",
    Class: "A+",
    Position: "Basic",
    Exam: "passed"
  }, {
    Name: "Khalid",
    FatherName: "Walid",
    Class: "Network+",
    Position: "advance",
    Exam: "pending"
  }, {
    Name: "Ahmad",
    FatherName: "Mahmood",
    Class: "Security+",
    Position: "Expert",
    Exam: "Failed"
  }, {
    Name: "Abdul",
    FatherName: "Khalid",
    Class: "A+",
    Position: "Basic",
    Exam: "passed"
  }, {
    Name: "Khalid",
    FatherName: "Walid",
    Class: "Network+",
    Position: "advance",
    Exam: "pending"
  }, {
    Name: "Ahmad",
    FatherName: "Mahmood",
    Class: "Security+",
    Position: "Expert",
    Exam: "Failed"
  }, {
    Name: "Abdul",
    FatherName: "Khalid",
    Class: "A+",
    Position: "Basic",
    Exam: "passed"
  }, {
    Name: "Khalid",
    FatherName: "Walid",
    Class: "Network+",
    Position: "advance",
    Exam: "pending"
  }, {
    Name: "Ahmad",
    FatherName: "Mahmood",
    Class: "Security+",
    Position: "Expert",
    Exam: "Failed"
  },])

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>F/Name</th>
          <th>class</th>
          <th>grade</th>
          <th>Exam Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{information[0].Name}</td>
          <td>{information[0].FatherName}</td>
          <td>{information[0].Class}</td>
          <td>{information[0].Position}</td>
          <td>{information[0].Exam}</td>
        </tr>
        <tr>
          <td>{information[1].Name}</td>
          <td>{information[1].FatherName}</td>
          <td>{information[1].Class}</td>
          <td>{information[1].Position}</td>
          <td>{information[1].Exam}</td>
        </tr>
        <tr>
          <td>{information[2].Name}</td>
          <td>{information[2].FatherName}</td>
          <td>{information[2].Class}</td>
          <td>{information[2].Position}</td>
          <td>{information[2].Exam}</td>
        </tr>
        <tr>
          <td>{information[3].Name}</td>
          <td>{information[3].FatherName}</td>
          <td>{information[3].Class}</td>
          <td>{information[3].Position}</td>
          <td>{information[3].Exam}</td>
        </tr>
        <tr>
          <td>{information[4].Name}</td>
          <td>{information[4].FatherName}</td>
          <td>{information[4].Class}</td>
          <td>{information[4].Position}</td>
          <td>{information[4].Exam}</td>
        </tr>
        <tr>
          <td>{information[5].Name}</td>
          <td>{information[5].FatherName}</td>
          <td>{information[5].Class}</td>
          <td>{information[5].Position}</td>
          <td>{information[5].Exam}</td>
        </tr>

      </tbody>
    </table>

  )
}

export default App