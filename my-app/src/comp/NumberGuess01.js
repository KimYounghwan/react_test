import React,{useState} from "react"

export default function NumberGuess(props){
    
    const [com_num, setCom_num] = useState(Math.floor(Math.random()*100+1)) //난수용
    const [user_num, setUser_num] = useState("") //사용자 입력값
    const [result, setResult] = useState("") //정답판정결과

    function checkNum(){
        console.log("user_num="+user_num)
        if(com_num  == user_num)
            setResult("정답")
        else if(com_num < user_num)
            setResult(user_num+" 낮춰주세요")
        else
         setResult(user_num+" 높여주세요")
        setUser_num("")//사용자 입력숫자 지우기
    }
    function handleChange(e){
        setUser_num(e.target.value)
    }
    return (
        <div>
            <h1>숫자맞추기1</h1>
            <p>1~100사이 컴퓨터의 숫자를 맞춰보세요</p>
            <input type="number" 
                min="1" max="100"
                value={user_num} 
                onChange={handleChange}></input>
            <button onClick={checkNum}>정답확인</button>
            <div>확인결과 {result}</div>
        </div>
    )
}