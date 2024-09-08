import React from 'react';

function Fetch_02(props) {

    function fetch_text(){
        const url = "https://jsonplaceholder.typicode.com/users";

        fetch(url)
        .then((response) => response.text())
        .then((text) => console.log(text))
    }
    function fetch_json(){
        const url = "https://jsonplaceholder.typicode.com/users";

        fetch(url)
        .then((response) => response.json())
        .then((json) => console.log(json))
    }

    return (
        <div>
            <button onClick={fetch_text}>Get Text</button>
            <button onClick={fetch_json}>Get Json</button>
        </div>
    );
}

export default Fetch_02;