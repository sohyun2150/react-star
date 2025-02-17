import './Scores.css';
import '../../css/Spacing.css';
import { useState } from 'react';
import Header from '../common/Header';

export default function Scores() {
  return (
    <div>
      <Header/>

      <div className="p-3">
        <h1>학생 성적</h1>
        <ScoreInput />
      </div>
    </div>
  );
}

function ScoreInput() {

  const [name, setName] = useState('');
  const [kor, setKor] = useState();
  const [eng, setEng] = useState();
  const [math, setMath] = useState();
  const [scores, setScores] = useState([])

  return (
    <div>
      <h3>입력</h3>
      <div>
        <input className='p-2' type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
        <input className='p-2' type="text" placeholder="국어" value={kor} onChange={(e) => setKor(e.target.value)} />
        <input className='p-2' type="text" placeholder="영어" value={eng} onChange={(e) => setEng(e.target.value)} />
        <input className='p-2' type="text" placeholder="수학" value={math} onChange={(e) => setMath(e.target.value)} />
        <input className='p-2' type="button" value="추가" onClick={(e) => {

          const numKor = Number(kor)
          const numEng = Number(eng)
          const numMath = Number(math)
          const sum = numKor + numEng + numMath
          const avg = sum / 3

          setScores([...scores,
          { name: name, kor: numKor, eng: numEng, math: numMath, sum: sum, avg: avg }
          ])

          setName('')
          setKor('')
          setEng('')
          setMath('')
        }} />
      </div>

      <Divider />

      <ScorePrint data={scores} />
    </div>
  )
}

function Divider() {
  return (<hr className='Divider my-4'></hr>)
}

function ScorePrint({ data }) {
  return (
    <div>
      <h3>출력</h3>

      <table className="text-center">
        <thead>
          <tr>
            <td className="px-4 py-1">이름</td>
            <td className="px-4 py-1">국어</td>
            <td className="px-4 py-1">영어</td>
            <td className="px-4 py-1">수학</td>
            <td className="px-4 py-1">합계</td>
            <td className="px-4 py-1">평점</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-1">{item.name}</td>
                <td className="px-4 py-1">{item.kor}</td>
                <td className="px-4 py-1">{item.eng}</td>
                <td className="px-4 py-1">{item.math}</td>
                <td className="px-4 py-1">{item.sum}</td>
                <td className="px-4 py-1">{item.avg}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}


