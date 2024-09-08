import React,{useState} from "react"

export default function MyMemo(props){
    const [memoContents, setMemoContents] = useState([])//메모저장배열
    const [memoContent, setMemoContent] = useState("")//입력메모
    function handleContent(e){
        setMemoContent(e.target.value)
    }
    function handleClick(){
        // memoContents.push(memoContent)//안되요, 안되
        setMemoContents([...memoContents, memoContent])
        setMemoContent("")//입력 메모 삭제
    }
    return (
        <div>
            <h1>마이 메모장</h1>
            <div>
                <h2>메모폼</h2>
                <input type="text" 
                    value={memoContent} 
                    onChange={handleContent}></input>
                <button onClick={handleClick}>메모등록</button>
            </div>
            <div>
                <h2>메모목록</h2>
                <ul>
                    { memoContents.map((m)=><li>{m}</li>) }
                </ul>
            </div>
        </div>
    )
}