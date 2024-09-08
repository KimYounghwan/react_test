import React from 'react';

function MyButton(props) {
    function handleClick(e){
        console.log(e.target)
        console.log(e.target.innerHTML)
    }
    return (
        <div>
            <button onClick={handleClick}>OK</button>
        </div>
    );
}

export default MyButton;