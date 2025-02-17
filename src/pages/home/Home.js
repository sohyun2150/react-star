import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function Home() {

  const movePath = useNavigate();
  const pathHandler = (destination) => {
    movePath(destination);
  }

  return (
    <div>
      <h2>
        Sohyun's Portfolios
      </h2>

      <h4 className="mt-5">Componenet Ex</h4>
      <div>
        <button onClick={() => pathHandler('/components/1')}>Component1</button>
        <button onClick={() => pathHandler('/components/2')}>Component2</button>
        <button onClick={() => pathHandler('/components/3')}>Component3</button>
        <button onClick={() => pathHandler('/components/4')}>Component4</button>
        <button onClick={() => pathHandler('/components/5')}>Component5</button>
        <button onClick={() => pathHandler('/components/6')}>Component6</button>
      </div>

      <h4>Member List</h4>
      <div>
        <button onClick={() => pathHandler('/members')}>Go To Page</button>
      </div>

      <h4>Student Score List</h4>
      <div>
        <button onClick={() => pathHandler('/scores')}>Go To Page</button>
      </div>
    </div>
  )
}