import React, { useRef, useState } from 'react';

function JSONPlaceholder01(props) {
    const [dataList, setDataList] = useState([])
    const [formItems, setFormItems] = useState([])
    let targetText = useRef("")
    const baseUrl = "https://jsonplaceholder.typicode.com/"
    function handleClick(e){
        let btn = e.target
        console.log(btn.textContent)
        targetText.current = btn.textContent
        fetchList(btn.textContent)
    }
    function handleSubmit(e){
        e.preventDefault()
        
    }
    function fetchList(item){
        let listUrl = baseUrl+item+"s"
        fetch(listUrl)
        .then(response => response.json())
        .then(json => {
            setDataList(json)
            console.log( json.length)
            // for(let dt of json){
            //     console.log(dt.id)
            // }
            // for(let k in json[0]){ // 객체내 모든 변수 추출, 변수의 값추출
            //     console.log(k, json[0][k])
            // }
        })
    }
    function fetchOne(dtid){
        let json = null
        for(let dt of dataList){
            if(dt.id == dtid ){
                json = dt;
                break
            }
        }
        let a = []
        for(let k in json){ // 객체내 모든 변수 추출, 변수의 값추출
            // console.log(k, json[k])
            let aa = <><label>{k} : 
                <input key={k} name={k} value={json[k]}></input>
                </label><br></br></>
            console.log(aa)
            a.push(aa)
        }
        setFormItems(a)

    }
    // function fetchOne(dtid){
    //     let oneUrl = baseUrl+targetText.current+"s/"+dtid
    //     console.log("oneUrl")
    //     fetch(oneUrl)
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log(json)
    //         let a = []
    //         for(let k in json){ // 객체내 모든 변수 추출, 변수의 값추출
    //             // console.log(k, json[k])
    //             let aa = <><label>{k} : 
    //                 <input key={k} name={k} value={json[k]}></input>
    //                 </label><br></br></>
    //             console.log(aa)
    //             a.push(aa)
    //         }
    //         setFormItems(a)
    //     })
    // }
    return (
        <>
        <div>
            <h1>JSON Placeholder</h1>
            <button onClick={handleClick}>post</button>
            <button onClick={handleClick}>comment</button>
            <button onClick={handleClick}>album</button>
            <button onClick={handleClick}>photo</button>
            <button onClick={handleClick}>todo</button>
            <button onClick={handleClick}>user</button>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                {formItems}
            </form>
        </div>
        <div>
            <ul style={{listStyle:"none"}}>
                {dataList.map((dt,index)=>{
                    return <li key={index}><a onClick={(e)=>{
                        e.preventDefault()
                        fetchOne(dt.id)
                    }} href={baseUrl+targetText.current+"s/"+dt.id}>{dt.id}</a></li>
                })}
            </ul>
        </div>
        </>
    );
}
export default JSONPlaceholder01;