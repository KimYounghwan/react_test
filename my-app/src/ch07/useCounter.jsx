import React, { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div>
            <p>총 {count}번 </p>
            <p>총 {count2}번 </p>
            <button onClick={()=>{setCount(count+1);setCount2((count+1)*10);document.title=`${count}번`}}>
                클릭
            </button>
        </div>
    )
}

export default Counter;
