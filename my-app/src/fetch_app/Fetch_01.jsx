import React from 'react';

function Fetch_01(props) {

    function fetch_text(){
        const url = "'https://jsonplaceholder.typicode.com/posts/1";

        fetch(url)
        .then((response) => console.log(response))
    }
    fetch_text()
    return (
        <div>
            <h1>fetch() 함수</h1>
        </div>
    );
}

export default Fetch_01;