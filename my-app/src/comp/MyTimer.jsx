import React, {useState, useEffect} from "react"

export default function MyTimer(props){

    const [timer, setTimer] = useState(100);

    function _set_timer(){
        setTimer( timer - 1)//timer변수수정->컴포 다시그리기
    }
    useEffect( ()=>{
        const tid = setInterval( _set_timer, 1000  );
        if(timer == 0)
            clearTimeout(tid)//타이머종료
        return ()=>{ clearInterval(tid) }
    }, [timer] )//timer변수수정->useEffect()내 함수실행

    return (
        <div>
            <h1>Timer : {timer}</h1>
        </div>
    )
}