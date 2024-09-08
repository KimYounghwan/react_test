import React from 'react';

function GameResultList(props) {
    const { resultMsgList } = props

    const resultList = resultMsgList.map((m, index)=>
        <li key={index}>{m}</li>
    )

    return (
        <div>
            <ul>{resultList}</ul>
        </div>
    );
}

export default GameResultList;