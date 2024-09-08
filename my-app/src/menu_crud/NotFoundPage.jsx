import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//잘못된 페이지
export default function NotFoundPage(props){ 
    const navigate = useNavigate();

    return <>
        <h1>잘못된 페이지 요청</h1>
        <button onClick={(e)=>{
            navigate("/")
        }}>메인</button>

    </>
}
