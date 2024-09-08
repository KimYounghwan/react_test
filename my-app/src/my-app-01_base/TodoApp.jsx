import React from 'react';
import TodoListPage from './TodoListPage';
import TodoInputPage from './TodoInputPage';
import TodoDetailPage from './TodoDetailPage';
import TodoErrorPage from './TodoErrorPage';
import { useState } from 'react';

function TodoApp(props) {

    const [mode, setMode] = useState("main")

    //화면은 3가지. 리스트, 등록폼, 상세
    // let mode = "input" //main=list, input=등록폼, detail=상세
    let page = null
    if(mode == "main"){
    page = <TodoListPage />
    }else if(mode == "input"){
        page = <TodoInputPage  />
    }else if( mode == "detail"){
        page = <TodoDetailPage />
    }else{
        page = <TodoErrorPage />
    }
    return (
        <div>
            {page}
        </div>
    );
}

export default TodoApp;