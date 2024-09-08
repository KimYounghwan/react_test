import React from 'react';
import Button from 'react-bootstrap/Button';

function GawibawiboIntro(props) {
    function handleClick(){
        props.changePage("main")
    }
    return (
        <div>
            <h2>컴퓨터와 가위바위보를 해보세요</h2>
            <Button 
                className='mt-3'
                variant="outline-primary"
                onClick={handleClick}  
                style={{width:260, height:80, fontSize:"2em"}}>게임시작</Button>
            <h3 className='mt-3'>게임시작 버튼을 눌러 시작하세요</h3>
        </div>
    );
}

export default GawibawiboIntro;