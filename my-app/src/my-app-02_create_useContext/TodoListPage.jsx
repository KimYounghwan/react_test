import React from 'react';
import TodoContext from './TodoContext';
import { useContext } from 'react';

function TodoListPage(props) {
    const { changePage, addTodo, todoList } = useContext(TodoContext)
    return (
        <div>
            <h1>TodoListPage</h1>
            <p>할일갯수 : {todoList.length}</p>
            <button onClick={(e)=>{
                changePage("input")
            }}>등록화면</button>

        </div>
    );
}

export default TodoListPage;