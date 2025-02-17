import Header from '../common/Header';
import content from '../../json/contents.json';

export default function App() {
  return (
    <div>
      <Header />
      {
        content.map((con, idx) => (<ImgDivComp key={idx} content={con} />))
      }
    </div>
  );
}

function ImgDivComp(props) {
  const containerStyle = {
    display: 'flex',
    width: '100%',
    height: '200px',
    border: '1px solid black'
  }

  const imgStyle = {
    height: '100%',
    aspectRatio: 1,
    marginRight: '10px'
  }

  const textStyle = {
    margin: 0
  }

  return (
    <div style={containerStyle}>
      <img style={imgStyle} src={props.content.img} />
      <div>
        <h1 style={textStyle}>{props.content.title}</h1>
        <span>{props.content.desc}</span>
      </div>
    </div>
  )
}