import React from 'react';
import TodoListPage from './TodoListPage';
import TodoInputPage from './TodoInputPage';
import TodoDetailPage from './TodoDetailPage';
import TodoErrorPage from './TodoErrorPage';
import { useState } from 'react';

function TodoApp(props) {

    const [mode, setMode] = useState("main")
    const [todoObj, setTodoObj] = useState(null) //상세보기할객체
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
    //상세보기함수
    function detailTodo( _no ){
        //번호에 해당하는 todo객체를 저장
        for(let td of todoList){
            if( td.no == _no ){
                setTodoObj(td)
                return
            }
        }
    }
    //할일변경함수
    function updateTodo( todo ){
        let todoList2 = todoList.map((td)=>{
            if(td.no == todo.no){ //수정할 대상이라면 값을 바꿔서 저장
                td.title = todo.title;
                td.done = todo.done;
                td.content = todo.content;
                return td
            }
            return td //수정할대상이 아니면 그대로 저장
        })
        setTodoList(todoList2)
    }
    //완료변경
    function changeDone(no){
        let todoList2 = todoList.map((td)=>{
            if(td.no == no){ //수정할 대상이라면 값을 바꿔서 저장
                td.done = ! td.done;
                return td
            }
            return td //수정할대상이 아니면 그대로 저장
        })
        setTodoList(todoList2)
    }
    //할일 삭제. no = 지울할일번호
    function deleteTodo( no ){
        // 기존할일중 지우려는 번호가 아닌 할일들만 추출하여 배열생성
        let todoList2 = todoList.filter((td)=> td.no != no)
        setTodoList(todoList2)
    }
    //화면은 3가지. 리스트, 등록폼, 상세
    // let mode = "input" //main=list, input=등록폼, detail=상세
    let page = null
    if(mode == "main"){
    page = <TodoListPage 
            todoList={todoList}
            onDeleteTodo={deleteTodo}
            onChangeDone={changeDone}
            onDetailTodo={detailTodo}
            onChangePage={changePage}
        />
    }else if(mode == "input"){
        page = <TodoInputPage  
        onTodoAdd={addTodo}
        onChangePage={changePage}
        />
    }else if( mode == "detail"){
        page = <TodoDetailPage 
        todoObj={todoObj}
        onDeleteTodo={deleteTodo}
        onTodoUpdate={updateTodo}
        onChangePage={changePage}
        />
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