import React, { useEffect, useState } from "react";

function Counter3(props) {
    const [count, setCount] = useState(0);

    const [isOnLine, setIsOnLine] = useState(null)

    useEffect(()=>{
        document.title=`${count}번`
        return ()=>{
            console.log("** END **")
        }
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

export default Counter3;
