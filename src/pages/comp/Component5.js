import Header from '../common/Header';

import banana from '../../images/banana.png';
import strawberry from '../../images/strawberry.jpg';

export default function Component5() {
  return (
    <div>
      <Header />
      <ImgDivComp image={strawberry} title='Straweberry' content='맛 좋은 딸기' />
      <ImgDivComp image={banana} title='Banana' content='맛 좋은 바나나' />
    </div>
  );
}

function ImgDivComp({ image, title, content }) {
  const containerStyle = {
    width: '100%',
    height: '230px',
    display: 'flex',
    border: '1px solid red'
  }

  const imageStyle = {
    height: '100%',
    aspectRatio: '1',
    marginRight: '10px'
  }

  const textStyle = {
    padding: 0,
    margin: 0
  }

  return (
    <div style={containerStyle}>
      <img style={imageStyle} src={image} />
      <div>
        <h1 style={textStyle}>{title}</h1>
        <span>{content}</span>
      </div>
    </div>
  )
}