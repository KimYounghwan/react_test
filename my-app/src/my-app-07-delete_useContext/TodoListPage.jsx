import React from 'react';

function TodoListPage(props) {
    const {todoList, onDetailTodo} = props

    let todoTbody = []
    for(let td of todoList){
        let obj = <tr key={td.no}>
                    <td><a href={td.no} onClick={(e)=>{
                        e.preventDefault() //화면 리로딩방지
                        onDetailTodo(td.no)
                        props.onChangePage("detail")
                        console.log(td.no)
                    }}>{td.title}</a></td>
                    <td><input type='checkbox' 
                            checked={td.done} 
                            onChange={(e)=>{ //todoList에서 해당no의 done바꿈
                                props.onChangeDone(td.no)
                            }} ></input>완료
                        <button onClick={()=>{
                            props.onDeleteTodo(td.no)
                        }}>삭제</button>
                    </td>
                  </tr>
        todoTbody.push(obj)
    }

    return (
        <div>
            <h1>TodoListPage</h1>
            <p>할일갯수 : {props.todoList.length}</p>
            <button onClick={(e)=>{
                props.onChangePage("input")
            }}>등록화면</button>
        
        <table>
            <thead>
                <tr>
                    <th>제목</th>
                    <th>관리</th>
                </tr>
            </thead>
            <tbody>
                {todoTbody}
            </tbody>
        </table>

        </div>
    );
}

export default TodoListPage;