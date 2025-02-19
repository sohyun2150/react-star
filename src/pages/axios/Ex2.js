import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Header from '../common/Header';
import axios from 'axios';
import { useState } from 'react';

import Ex2Detail from '../../component/axios/Ex2Detail';

export default function Ex2() {

  const [areaList, setAreaList] = useState([]);
  const [areaDetail, setAreaDetail] = useState(null);
  const [tempAreaName, setTempAreaName] = useState('');
  const [inputArea, setInputArea] = useState(null);

  const handlerAreaList = () => {
    axios.get('http://192.168.0.123:8080/api/area/list')
      .then(response => setAreaList(response.data.data))
      .catch(error => console.log(error))
  }

  const handlerAreaDetail = id => {
    axios.get('http://192.168.0.123:8080/api/area/findById', {
      params: {
        id: id
      }
    })
      .then(response => {
        setAreaDetail(response.data.data);
        setTempAreaName(response.data.data.areaName);
      })
      .catch(error => console.log(error))
  }

  const handlerInput = () => {
    const obj = { areaName: inputArea }
    axios.post('http://192.168.0.123:8080/api/area/regist',
      JSON.stringify(obj), {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then(response => console.log(response))
  }

  return (
    <div>
      <Header />
      <h3 className='fw-bold mt-3'>Axios Ex2</h3>

      <InputGroup className="mb-3">
        <Form.Control type="text" onChange={e => setInputArea(e.target.value)}></Form.Control>
        <Button variant="primary" size="sm" onClick={handlerInput}>지역 입력</Button>
      </InputGroup>

      <Button variant="primary" size="sm" className='my-3' onClick={handlerAreaList}>지역 리스트 불러오기</Button>
      <Table className='text-center w-50'>
        <thead>
          <tr>
            <td className='text-bg-dark'>지역 리스트</td>
          </tr>
        </thead>
        <tbody>
          {
            areaList.map(area => (
              <tr key={area.idx} onClick={() => handlerAreaDetail(area.idx)}>
                <td>{area.areaName}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>

      {
        areaDetail &&
        <Ex2Detail detail={tempAreaName} handlerReset={() => {
          setAreaDetail(null);
          setTempAreaName('');
        }}/>
      }
    </div>
  )
}
