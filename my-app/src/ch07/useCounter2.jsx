import React, { useEffect, useState } from "react";

function Counter2(props) {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title=`${count}번`
    })
    return (
        <div>
            <p>총 {count}번 </p>
            <button onClick={()=>{setCount(count+1);}}>
                클릭
            </button>
        </div>
    )
}

export default Counter2;
