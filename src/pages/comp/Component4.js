import Header from '../common/Header';
import logo from '../../images/logo.png';

export default function Component4() {
  return (
    <div>
      <Header/>
      <ImgDivComp/>
      <ImgDivComp/>
      <ImgDivComp/>
    </div>
  );
}

function ImgDivComp() {
  const style = {
    width: '100%',
    height: '200px',
    display: 'flex',
    border: '1px solid black'
  }

  const hStyle = {
    padding: '0',
    margin: '0'
  }

  return (
    <div style={style}>
      <img src={logo} />
      <div style={{
        position: 'absolute',
        height: '200px',
        aspectRatio: '1',
        borderRadius: '50%',
        border: '1px solid skyblue'
      }}>
      </div>
      <div>
        <h1 style={hStyle}>귀여운 병아리</h1>
        <span>작고 말랑말랑한 병아리</span>
      </div>
    </div>
  )
}
