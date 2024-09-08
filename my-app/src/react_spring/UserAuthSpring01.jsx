import React, { useState } from 'react';
import axios from "axios";

function UserAuthSpring01(props) {
    const [dataList, setDataList] = useState([])
    function handleClick(e){
        e.preventDefault()
        fetchList()
    }
    async function fetchList(){
        const url = "/users";

        await axios({
            url : "/users",
            method : "get"
        }).then((res)=>{
            console.log(res.data)
            setDataList(res.data.data)
        })
        // fetch(url,{
        //     method: 'GET',
        //   })
        // .then((response) => {
        //     // console.log(response)
        //     // console.log("headers : ",response.headers)
            
        //     // // 요렇게 forEach를 사용해서 출력하거나
        //     //   response.headers.forEach(console.log);
        //     // 요렇게 for..of를 사용해서 출력할 수 있다고 합니당
        //     for(let entry of response.headers.entries()) {
        //         console.log("RES_HEADER : ",entry);
        //     }
        //     return response.json()
        // })
        // .then((json) => {
        //     setDataList(json.data)
        //     console.log(json.code, json.data)
        // })
        
    }
    function handleSubmit(e){
        e.preventDefault()

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        e.target.id.value=""
        e.target.pw.value=""
        e.target.name.value=""
        fetch("/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => console.log(data))
          
    }
    return (
        <>
        <div>
            <h1>FormSpring</h1>
        </div>
        <div>
            <h2>User 입력폼</h2>
            <button onClick={handleClick}>목록보기</button>
            <form onSubmit={handleSubmit}>
                <label>
                    UserId
                    <input name="id" size="5" required></input>
                </label><br></br>
                <label>
                    Password
                    <input type='password' name="pw" size="5" required></input>
                </label><br></br>
                <label>
                    User Name
                    <input name="name" size="5" required></input>
                </label><br></br>
                <input type='submit' value="등록"></input>
            </form>
        </div>
        <div>
            <h2>로그인폼</h2>
            <form onSubmit={(e)=>{
                e.preventDefault()

                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());
                console.log(data);
                e.target.id.value=""
                e.target.pw.value=""
                fetch("/login", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  })
                    .then((response) => {
                        console.log(response)
                        return response.json()
                    })
                    .then((data) => console.log(data))
        
            }}>
                <label>
                    UserId
                    <input name="id" size="5" required></input>
                </label><br></br>
                <label>
                    Password
                    <input type='password' name="pw" size="5" required></input>
                </label><br></br>
                <input type='submit' value="로그인"></input>
            </form>
        <button onClick={(e)=>{
            fetch("/loginCheck", {
                headers: {
                    "Content-Type": "application/json",
                },
                })
                .then((response) => {
                    console.log(response)
                    return response.json()
                })
                .then((data) => console.log(data))
            
        }}>로그인체크</button>
        <button onClick={(e)=>{
            fetch("/logout", {
                headers: {
                    "Content-Type": "application/json",
                },
                })
                .then((response) => {
                    console.log(response)
                    return response.json()
                })
                .then((data) => console.log(data))
            
        }}>로그아웃</button>
        </div>
        <div>
            <h2>목록</h2>
            <ul style={{listStyle:"none"}}>
                {dataList.map((dt,index)=>{
                    return <li key={index}>{dt.id}</li>
                })}
            </ul>
        </div>
        </>
    );
}

export default UserAuthSpring01;