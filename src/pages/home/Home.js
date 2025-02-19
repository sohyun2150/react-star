import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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
        <Button variant="primary" className='me-1' size="sm" onClick={() => pathHandler('/components/1')}>Component1</Button>
        <Button variant="primary" className='me-1' size="sm" onClick={() => pathHandler('/components/2')}>Component2</Button>
        <Button variant="primary" className='me-1' size="sm" onClick={() => pathHandler('/components/3')}>Component3</Button>
        <Button variant="primary" className='me-1' size="sm" onClick={() => pathHandler('/components/4')}>Component4</Button>
        <Button variant="primary" className='me-1' size="sm" onClick={() => pathHandler('/components/5')}>Component5</Button>
        <Button variant="primary" className='me-1' size="sm" onClick={() => pathHandler('/components/6')}>Component6</Button>
      </div>

      <h4 className='mt-3'>Member List</h4>
      <div>
        <Button variant="primary" className='me-1' size="sm" onClick={() => pathHandler('/members')}>Go To Page</Button>
      </div>

      <h4 className='mt-3'>Student Score List</h4>
      <div>
        <Button variant="primary" className='me-1' size="sm" onClick={() => pathHandler('/scores')}>Go To Page</Button>
      </div>

      <h4 className='mt-3'>Axios Ex List</h4>
      <div>
        <Button variant="primary" className='me-1' size="sm" onClick={() => pathHandler('/axios/1')}>Axios Ex1</Button>
        <Button variant="primary" className='me-1' size="sm" onClick={() => pathHandler('/axios/2')}>Axios Ex2</Button>
      </div>
    </div>
  )
}