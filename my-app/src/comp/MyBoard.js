import React, {useState} from 'react';

export default function MyBoard(props){

    return (
        <div>
            <a href='#' onClick={(e)=>{
                e.preventDefault();
                props.onClick(100,200)
            }}>OK</a>
        </div>
    )

}
