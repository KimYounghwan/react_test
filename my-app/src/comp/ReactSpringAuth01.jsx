import React, { useState } from 'react';

function ReactSpringAuth01(props) {
    const [result, setResult] = useState("")
    return (
        <>
            <h1>ReactSpringAuth01</h1>
            <button onClick={(e)=>{
                e.preventDefault();
                let URL = "/users";
                fetch(URL, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      product_id: product.product_id,
                    }),
                  })
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error(ERROR_MESSAGE.FAILED_TO_ADD_TO_CART);
                      }
                      
                      // 요렇게 forEach를 사용해서 출력하거나
                      response.headers.forEach(console.log);
                      
                      // 요렇게 for..of를 사용해서 출력할 수 있다고 합니당
                      for(let entry of response.headers.entries()) {
                        console.log(entry);
                      }
                    }
                
            }}>Loading</button>
            <div>{result}</div>
        </>
    );
}

export default ReactSpringAuth01;