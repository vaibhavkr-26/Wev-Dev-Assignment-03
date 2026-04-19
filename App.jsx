import { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';
import ScoreStats from './components/ScoreStats';

const initialStudents = [
  { id: 1, name: 'Aarav Mehta', score: 78 },
  { id: 2, name: 'Priya Sharma', score: 35 },
  { id: 3, name: 'Rohan Gupta', score: 91 },
  { id: 4, name: 'Sneha Patel', score: 22 },
  { id: 5, name: 'Karan Singh', score: 55 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [nextId, setNextId] = useState(6);

  function addStudent(newStudent) {
    let newEntry = { id: nextId, name: newStudent.name, score: newStudent.score };
    let updated = students.concat([newEntry]);
    setStudents(updated);
    setNextId(nextId + 1);
  }

  function handleSave(id, newScore) {
    let updated = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        let updatedStudent = { id: students[i].id, name: students[i].name, score: newScore };
        updated.push(updatedStudent);
      } else {
        updated.push(students[i]);
      }
    }
    setStudents(updated);
  }

  function handleDelete(id) {
    let updated = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].id !== id) {
        updated.push(students[i]);
      }
    }
    setStudents(updated);
  }

  return (
    <>
      <Header />
      <main className="container">
        <AddStudentForm onAdd={addStudent} />
        <ScoreStats students={students} />
        <StudentTable
          students={students}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      </main>
      <footer>
        <p>Vaibhav · 2501730427 · Section G · Web Dev II Assignment 3</p>
      </footer>
    </>
  );
}

export default App;
