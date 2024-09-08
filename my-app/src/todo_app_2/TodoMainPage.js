import React from 'react';

function TodoMainPage(props) {
    const {todoList, onTodoDetail, onTodoDelete} = props

    function handleClick(e){
        //등록페이지를 보여주기
        props.onChangePage("input")
    }

    const listContent = todoList.map((td,index)=>
        <tr key={index}>
            <td>{<a href="#" onClick={(e)=>{
                console.log("click", td.no, td.title)
                onTodoDetail(td.no)
                props.onChangePage("detail")
            }}>{td.title}</a>}</td>
            <td>
                <label><input type="checkbox" onClick={(e)=>{
                    console.log("check", td.no, td.title)
                    onTodoDetail({no:td.no,done:e.target.value})
                }}></input>완료</label>
                <button onClick={()=>{
                    console.log("delete", td.no, td.title)
                    onTodoDelete(td.no)
                }} >삭제</button>
            </td>
        </tr>
    );

    return (
        <div>
            <h1>할일메인화면</h1>
            <h2>할일 갯수 : {todoList.length}</h2>
            <table>
                <thead>
                    <tr>
                        <th>제목</th><th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {listContent}
                </tbody>
            </table>
            <button onClick={handleClick}>등록</button>
        </div>
    );
}

export default TodoMainPage;