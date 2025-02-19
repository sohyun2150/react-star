import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../common/Header';
import axios from 'axios';
import { useState } from 'react';


export default function Ex1() {

  const [list, setList] = useState([]);
  const [detail, setDetail] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlerAxios1 = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setList(response.data))
      .catch(error => console.log(error))
  }

  const handlerDetail = (id) => {
    console.log(id);
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {setDetail(response.data); handleShow();})
      .catch(error => console.log(error))
  }

  return (
    <div>
      <Header />

      <h3 className='fw-bold mt-3'>Axios Ex1</h3>
      <Button variant="primary" size="sm" className="my-3" onClick={handlerAxios1}>axios 호출</Button>

      <Table className="my-3 w-50">
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr style={{cursor: 'pointer'}} key={item.id} onClick={() => handlerDetail(item.id)}>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>{detail.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{detail.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}
