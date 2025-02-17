import Header from '../common/Header';
import logo from '../../images/logo.png';

export default function Component3() {
  return (
    <div>
      <Header />
      <ImgDivComp />
    </div>
  );
}

function ImgDivComp() {

  const style = {
    width: '100%',
    height: '230px',
    display: 'flex',
    border: '1px solid black'
  }

  const hStyle = {
    padding: '0',
    margin: '0'
  }

  return (
    <div style={style}>
      <img src={logo} alt="logo" />
      <div>
        <h1 style={hStyle}>귀여운 병아리</h1>
        <span>작고 말랑말랑한 병아리</span>
      </div>
    </div>
  )
}