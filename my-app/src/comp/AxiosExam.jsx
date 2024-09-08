import React, {useEffect, useState} from 'react';
import axios from 'axios';

function AxiosExam() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8080/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
        </div>
    );
}
/*
  function save(method, newItem) {
    const requestOptions = {
      method: method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newItem)
    };
    fetch('http://localhost:8080/todo', requestOptions)
      .then((response) => response.json())
      .then((respObj) => {
        setWorks(respObj.data);
      })
      .catch((error) => {
        console.error('실패:', error);
    });
  }

  // 할 일 추가 기능
  function addWork(newWork) {
    save("POST", {userId:"an", title:newWork});
    // 알람창 보이기
    setToastShow(true);
    setToastType("add");
  }

  // 할 일 삭제 기능
  function removeWork(no) {
    save("DELETE", {no:no});
    // 알람창 보이기
    setToastShow(true);
    setToastType("remove");
  }

  // 할 일 목록 업데이트 기능
  function updateItem(item) {;
    save("PUT", item);
  }
*/



export default AxiosExam;
