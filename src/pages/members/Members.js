import student from '../../json/student.json';
import '../../css/Spacing.css';
import './Members.css';
import { useState } from 'react';
import Header from '../common/Header';

export default function App() {
  const location = ['전체', '서울', '부산', '경기', '광주', '대전', '인천'];
  const [selectedLoc, setSelectedLoc] = useState('전체');
  const students = student.student;
  const [filteredStudents, setFilteredStudents] = useState([...students])

  return (
    <div>
      <Header />

      <div className="d-flex justify-content-center my-5">
        {
          location.map((loc, idx) => {
            const buttonStyle = {
              backgroundColor: selectedLoc === loc ? 'black' : '#eee',
              color: selectedLoc === loc ? 'white' : 'black',
              border: '1px solid black'
            }

            return (
              <button key={idx} className="px-5 py-1" style={buttonStyle} onClick={(e) => {
                const selectedLocation = e.target.innerHTML;
                setSelectedLoc(selectedLocation);

                if (selectedLocation === '전체') {
                  setFilteredStudents(students);
                } else {
                  setFilteredStudents(students.filter(student => student.region === selectedLocation))
                }
              }}>{loc}</button>
            )
          })
        }
      </div>

      <table className="m-auto my-5 text-center">
        <StudentTableHead />
        <StudentTableBody data={filteredStudents} />
      </table>
    </div>
  );
}

function StudentTableHead() {
  return (
    <thead>
      <tr>
        <td className="px-4 py-2">이름</td>
        <td className="px-4 py-2">나이</td>
        <td className="px-4 py-2">이메일</td>
        <td className="px-4 py-2">지역</td>
      </tr>
    </thead>
  )
}

function StudentTableBody({ data }) {
  return (
    <tbody>
      {
        data.map((item) => (
          <tr key={item.id}>
            <td className="px-4 py-1">{item.name}</td>
            <td className="px-4 py-1">{item.age}</td>
            <td className="px-4 py-1">{item.email}</td>
            <td className="px-4 py-1">{item.region}</td>
          </tr>
        ))
      }
    </tbody>
  )
}