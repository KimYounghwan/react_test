import React, { useState } from 'react';
import GameHeader from './GameHeader';
import "../App.css"
import GameInput from './GameInput';
import GameResult from './GameResult';
import GameResultList from './GameResultList';

function NumberGuessGame(props) {
    // 1~100사이 난수 생성 
    const [comNum, setComNum] = useState( 
        Math.floor(Math.random()*100+1) 
    );
    // //사용자입력숫자
    // const [userNum, setUserNum] = useState("")
    //정답 확인 메시지
    const [resultMsg, setResultMsg] = useState("")
    //정답메시지 배열
    const [resultMsgList, setResultMsgList] = useState([])

    //정답확인
    function checkNumber ( userNum ){
        let msg = userNum+" : ";
        if( comNum == userNum )
            msg +=("정답입니다")
        else if ( comNum < userNum )
            msg +=("낮춰주세요")
        else
            msg +=("높여주세요")
        console.log("msg="+msg);
        setResultMsg(msg)
        setResultMsgList( [ msg , ...resultMsgList] )
    }
    return (
        <div className='App'>
            <GameHeader />
            <GameInput 
                // userNum={userNum} 
                // setUserNum={setUserNum} 
                onNumberInput={checkNumber} />
            <GameResult resultMsg={resultMsg} />
            <GameResultList resultMsgList={resultMsgList}/>
        </div>
    );
}

export default NumberGuessGame;