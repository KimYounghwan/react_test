import React from 'react';
import GawibawiboHeader from './GawibawiboHeader';
import GawibawiboInput from './GawibawiboInput';
import GawibawiboResult from './GawibawiboResult';
import { useState } from 'react';
import GawibawiboIntro from './GawibawiboIntro';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GawibawiboGame(props) {  

    const [mode, setMode ] = useState("intro"); // "main"
    const [resultList, setResultList ] = useState([])
    const [winCount, setWinCount] = useState(0);
    let pageObj = {
        "intro":         <Row>
                    <Col>
                    <GawibawiboIntro changePage={changePage} />
                    </Col>
                </Row>,
        "main": <><Row>
                    <Col>
                        <GawibawiboInput onButtonClick={checkResult}/>
                    </Col>
                    <Col xs={5}>
                        <GawibawiboResult 
                            winCount={winCount} 
                            resultList={resultList}
                            resetGame={resetGame} />
                    </Col>
                </Row>
                </>
    }
    let page = pageObj[mode];
    function resetGame(){
        setWinCount(0)
        setResultList([])
    }
    function changePage( pageName ){
        setMode(pageName)
    }
    function checkResult( userNum ){
        //10회이면 중지
        if(resultList.length==10) return;
        const gbb = "가위,바위,보".split(",")
        //난수 생성. 0=가위  1=바위  2=보
        const comNum = Math.floor(Math.random()*3)//0,1,2
        let r = "사람 승" //판정결과
        if( userNum == comNum ){
            r = "비김"
        }else if( (comNum == 0 & userNum == 2) || 
                    (comNum == 1 && userNum == 0) ||
                    (comNum == 2 && userNum == 1)){ //사람 패한 경우만 계산
            r = "사람 패"
        }else{
            setWinCount(winCount+1)
        }
        let rs = `사람=${gbb[userNum]} : 컴퓨터=${gbb[comNum]} =>${r}`        
        setResultList( [...resultList, rs] )
    }

    return (
        <Container className='App'>
        <Row>
          <Col>
            <GawibawiboHeader />
          </Col>
        </Row>
        {page}
      </Container>
    );
}

export default GawibawiboGame;