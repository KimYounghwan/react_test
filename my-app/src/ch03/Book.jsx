import React from "react"

function Book(props){
    return (
        <div>
            <h1>{`이 책은 ${props.name}입니다`}</h1>
            <h1>{`이 책 페이지수는 ${props.numOfPage}입니다`}</h1>
        </div>
    )
}
export default Book;