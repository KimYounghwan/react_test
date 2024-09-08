import React,{useState} from "react"

export default function NumberGuess(props){
    
    const [com_num, setCom_num] = useState(Math.floor(Math.random()*100+1)) //난수용
    const [user_num, setUser_num] = useState("") //사용자 입력값
    const [result, setResult] = useState("") //정답판정결과
    const [tryCount, setTryCount] = useState(1) //정답시도횟수
    const [tryHistory, setTryHistory] = useState([]) //판정이력

    function checkNum(){
        console.log("user_num="+user_num)
        let s = tryCount+"번째 시도 "+user_num+" "
        if(com_num  == user_num){
            s += "정답"
            setResult(s)
        }
        else if(com_num < user_num){
            s += "낮춰주세요"
            setResult(s)
        }
        else{
            s += "높여주세요"
            setResult(s)
        }
        setUser_num("")//사용자 입력숫자 지우기
        setTryHistory([s,...tryHistory])
        setTryCount(tryCount+1)
    }
    function handleChange(e){
        setUser_num(e.target.value)
    }
    return (
        <div>
            <h1>숫자맞추기</h1>
            <p>1~100사이 컴퓨터의 숫자를 맞춰보세요</p>
            <p>{tryCount}번째 시도</p>
            <input type="number" 
                min="1" max="100"
                value={user_num} 
                onChange={handleChange}></input>
            <button onClick={checkNum}>정답확인</button>
            <div>확인결과 {result}</div>
            <div>
                <ul>
                    {tryHistory.map((h)=><li>{h}</li>)}
                </ul>
            </div>
        </div>
    )
}