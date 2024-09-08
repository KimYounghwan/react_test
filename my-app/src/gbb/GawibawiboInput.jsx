import React from 'react';
import Button from 'react-bootstrap/Button';

function GawibawiboInput(props) {

    function handleGawiClick(){
        props.onButtonClick(0)
    }
    function handleBawiClick(){
        props.onButtonClick(1)
    }
    function handleBoClick(){
        props.onButtonClick(2)
    }
    return (
        <div>
            <h2>컴퓨터와 가위바위보를 해보세요</h2>
            <Button className='mx-3'
                variant="outline-primary"
            onClick={handleGawiClick}  style={{width:100, height:80, fontSize:"1.5em"}}>가위</Button>
            <Button className='mx-3'
                variant="outline-primary"
             onClick={handleBawiClick} style={{width:100, height:80, fontSize:"1.5em"}}>바위</Button>
            <Button className='mx-3'
                variant="outline-primary"
            onClick={handleBoClick} style={{width:100, height:80, fontSize:"1.5em"}}>보</Button>

            <h3  className='mt-3'>&gt;&gt; 가위,바위,보 하나만 선택하세요 &lt;&lt;</h3>
            <hr></hr>
        </div>
    );
}

export default GawibawiboInput;