import Header from '../common/Header';

export default function Component1() {
  return (
    <div>
      <Header />

      <DivComp compName='FirstDiv' bgColor='red' />
      <DivComp compName='SecondDiv' bgColor='blue' />
      <DivComp compName='ThirdDiv' bgColor='green' />
    </div>
  );
}

function DivComp(props) {
  const divStyle = {
    width: '100%',
    height: '100px',
    color: 'white',
    backgroundColor: props.bgColor
  }

  const hStyle = {
    margin: 0,
    textAlign: 'left'
  }

  return (<div style={divStyle}>
    <h1 style={hStyle}>{props.compName}</h1>
  </div>
  )
}
