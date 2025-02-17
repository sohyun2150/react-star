import Header from '../common/Header';

export default function Component2() {

  const flexStyle = {
    display: 'flex'
  }

  return (
    <div>
      <Header />

      <DivComp width='100%' title='FirstDiv' bgColor='red' />
      <div style={flexStyle}>
        <DivComp width='50%' title='SecondDiv' bgColor='blue' />
        <DivComp width='50%' title='ThirdDiv' bgColor='green' />
      </div>
    </div>
  );
}

function DivComp({ width, title, bgColor }) {

  const divStyle = {
    width: width,
    height: '100px',
    color: 'white',
    backgroundColor: bgColor
  }

  const hStyle = {
    margin: '0px'
  }

  return (
    <div style={divStyle}>
      <h1 style={hStyle}>
        {title}
      </h1>
    </div>
  )
}