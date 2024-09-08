import React, { useState } from 'react';

function NumberGuessGame(props) {
    const [guessResult, setGuessResult] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        let userNum = e.target.userNum.value
        fetch_result(userNum)
        e.target.userNum.value = ""
    }
    function fetch_result(userNum){
        if(userNum.trim()=="") return
        const url = "http://localhost:8080/guess/"+userNum;

        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setGuessResult(json.message)
        })
    }
    return (
        <div>
            <h1>숫자맞추기 게임</h1>
            <hr></hr>
            <p>컴퓨터가 정한 1~100사이 숫자를 맞춰 보세요</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <input name="userNum" size="5"></input>
                    <input type='submit' value="정답확인"></input>
                </label>
            </form>
            <h3>결과: {guessResult} </h3>
            
        </div>
    );
}

export default NumberGuessGame;