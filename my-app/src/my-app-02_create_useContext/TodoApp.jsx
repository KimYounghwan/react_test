import React from 'react';
import TodoListPage from './TodoListPage';
import TodoInputPage from './TodoInputPage';
import TodoDetailPage from './TodoDetailPage';
import TodoErrorPage from './TodoErrorPage';
import { useState } from 'react';
import TodoContext from './TodoContext';

function TodoApp(props) {

    const [mode, setMode] = useState("main")
    /////////등록을 위한 기능
    //할일목록변수
    const [todoList, setTodoList] = useState([])
    //할일등록함수
    function addTodo( newTodo ){
        let newTodoList = [...todoList, newTodo]
        setTodoList( newTodoList )
    }
    //화면변경함수
    function changePage( modeName ){
        setMode(modeName)
    }

    //화면은 3가지. 리스트, 등록폼, 상세
    // let mode = "input" //main=list, input=등록폼, detail=상세
    let page = null
    if(mode == "main"){
    page = <TodoListPage 
        />
    }else if(mode == "input"){
        page = <TodoInputPage  
        />
    }else if( mode == "detail"){
        page = <TodoDetailPage />
    }else{
        page = <TodoErrorPage />
    }
    return (
        <TodoContext.Provider value={{ changePage, addTodo, todoList }}>

        <div>
            {page}
        </div>
        </TodoContext.Provider>
    );
}

export default TodoApp;