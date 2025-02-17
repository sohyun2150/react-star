import { useNavigate } from 'react-router-dom';

export default function Header() {
  const movePath = useNavigate();
  const backButtonStyle = {
    cursor: 'pointer'
  }

  return (
    <h2>
      <span style={backButtonStyle} onClick={e => movePath("/")}> &lt; </span> Sohyun's Portfolios
    </h2>
  )
}