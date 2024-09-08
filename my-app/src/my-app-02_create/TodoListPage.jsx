import React from 'react';

function TodoListPage(props) {
    return (
        <div>
            <h1>TodoListPage</h1>
            <p>할일갯수 : {props.todoList.length}</p>
            <button onClick={(e)=>{
                props.onChangePage("input")
            }}>등록화면</button>
            <button onClick={ ()=>{
                props.onChangePage("main")
            }  }>메인</button>
        </div>
    );
}

export default TodoListPage;