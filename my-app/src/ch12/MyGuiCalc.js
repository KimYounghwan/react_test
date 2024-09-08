import React from 'react';

function MyGuiCalc(props) {
    function handleClick(e){
        let sum = Number(e.target.innerHTML)
        console.log(e.target.innerHTML)
    }
    return (
        <div>
            <button onClick={handleClick}>1</button>
            <button onClick={handleClick}>2</button>
            <button onClick={handleClick}>3</button>
            <button onClick={handleClick}>4</button>
        </div>
    );
}

export default MyGuiCalc;