import StudentRow from './Student';

function StudentTable({ students, onSave, onDelete }) {
  let content;

  if (students.length === 0) {
    content = (
      <tr>
        <td colSpan="5">
          <div className="empty">No students yet. Add one above.</div>
        </td>
      </tr>
    );
  } else {
    content = students.map((student, index) => (
      <StudentRow
        key={student.id}
        rank={index + 1}
        student={student}
        onSave={onSave}
        onDelete={onDelete}
      />
    ));
  }

  return (
    <div className="card">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
