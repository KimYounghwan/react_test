import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GawibawiboResult(props) {
    const {winCount, resultList, resetGame} = props
    const [show, setShow] = useState(false);
    const [checkEnd, setCheckEnd] = useState(true);

    const handleJustClose = () => {
        setShow(false);
    }
    const handleClose = () => {
        resetGame()
        setShow(false);
        setCheckEnd(true)
    }
    const handleShow = () => setShow(true);
    useEffect(()=>{
        if(!checkEnd) return;
        if(resultList.length>=10){
            handleShow();
            setCheckEnd(false)
        }
    })
  
    return (
        <div>
            {resultList.length>=10 ? <h3>게임종료</h3>: <h3>10회중 {resultList.length+1}번째 선택</h3>}
            <hr></hr>
            <h3>승률: {((winCount/resultList.length)*100).toFixed(2)} %</h3>
            <ListGroup>
                {resultList.map((r,index)=>{
                    return <ListGroup.Item key={index}>{r}</ListGroup.Item>
                })}
            </ListGroup>
            
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            게임 종료
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                다시하기
            </Button>
            <Button variant="primary" onClick={handleJustClose}>그냥종료</Button>
            </Modal.Footer>
            </Modal>
        </div>

    );
}

export default GawibawiboResult;