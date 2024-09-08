import React, { useState } from 'react';

function GameInput(props) {
    const { onNumberInput} = props;
    const [userNum, setUserNum] = useState("")

    function handleChange(e){
        setUserNum(e.target.value)
    }
    function handleClick(e){
        onNumberInput(userNum) //정답확인
        setUserNum("")//입력한 숫자 지우기
    }
    function handleSubmit(e){
        e.preventDefault();//고유동작 취소시킴
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>새게임</button>
                <input type='number' value={userNum} onChange={handleChange}></input>
                <button onClick={handleClick}>정답확인</button>
            </form>
        </div>
    );
}

export default GameInput;