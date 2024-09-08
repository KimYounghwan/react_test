import React, { useState } from 'react';
import TodoInputPage from './TodoInputPage';
import TodoMainPage from './TodoMainPage';
import TodoDetailPage from './TodoDetailPage';

function TodoApp(props) {
    const [mode, setMode] = useState("input")
    const [todoList, setTodoList] = useState([])
    const [no, setNo] = useState(0)
    //외부에서 mode수정을 위한 함수
    function changePage( _mode ){
        setMode( _mode )
    }
    //할일등록함수
    function addTodo( td ){
        setTodoList( [...todoList, td] )
    }
    function showDetail( no ){
        setNo(no)
    }
    function deleteTodo( no ){
        //삭제할때엔 조건이 아닌것들만 추출
        let todoList2 = todoList.filter((td)=>{
            return td.no != no
        })
        setTodoList(todoList2)
    }
    //수정할 변수와 값을 가진 객체. no는 반드시 저장되어야함.
    function updateTodo( tdObj ){
        let todoList2 = [...todoList]//기존 리스트 복사
        for(let td of todoList2){
            if( td.no == tdObj.no ){
                for(let k in tdObj){
                    td[k] = tdObj[k]
                }
            }
        }
        setTodoList(todoList2)
    }
    let page = null;
    if( mode == "main" )
        page = <TodoMainPage 
                todoList={todoList}
                onChangePage={changePage}
                onTodoDetail={showDetail}
                onTodoDelete={deleteTodo}
                />; //화면에 보여줄 내용
    else if( mode == "input" )
        page = <TodoInputPage 
                onChangePage={changePage} 
                onTodoInput={addTodo}/>; //화면에 보여줄 내용
    else if( mode == "detail" ){
        let detailTd = null;
        for(let td of todoList){
            if(no == td.no){
                detailTd = td;
                break;
            }
        }
        page = <TodoDetailPage 
                todo={detailTd} 
                onChangePage={changePage}/>; //화면에 보여줄 내용
    }
    return (
        <div>
            {page}
        </div>
    );
}

export default TodoApp;