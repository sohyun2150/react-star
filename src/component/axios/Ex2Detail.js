import { useState } from 'react';

export default function Ex2Detail(props) {
  const [childAreaDetail, setChildAreaDetail] = useState('');

  return (
    <div>
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }} onClick={e => props.handlerReset()}>
        <div style={{
          backgroundColor: 'white',
          width: '50vw',
          height: '30vh',
          borderRadius: '6px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '3em'
        }}>
          <div>{props.detail}</div>
        </div>
      </div>
    </div>
  )
}