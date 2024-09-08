import React, { useEffect, useState } from 'react';
// import axios from 'axios';

function Weather(props){
  const {weatherXml} = props
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(()=>{
    let el_arr = []

    var parser = new DOMParser();
    var doc = parser.parseFromString(weatherXml, 'text/html');
    let ctg = doc.querySelector("category").textContent
    setTitle(ctg)//동네이름
    // find element
    var datas = doc.querySelectorAll('data');
    for(let dt of datas){
      let wt = {}
      wt.hour = dt.querySelector("hour").textContent
      wt.day = dt.querySelector("day").textContent
      wt.temp = dt.querySelector("temp").textContent
      wt.sky = dt.querySelector("sky").textContent
      wt.pty = dt.querySelector("pty").textContent
      wt.wfkor = dt.querySelector("wfKor").textContent
      wt.wfEn = dt.querySelector("wfEn").textContent
      wt.pop = dt.querySelector("pop").textContent
      wt.r12 = dt.querySelector("r12").textContent
      wt.s12 = dt.querySelector("s12").textContent
      wt.ws = dt.querySelector("ws").textContent
      wt.wd = dt.querySelector("wd").textContent
      wt.wdkor = dt.querySelector("wdKor").textContent
      wt.wdEn = dt.querySelector("wdEn").textContent
      wt.reh = dt.querySelector("reh").textContent
      el_arr.push(wt)
      console.log(wt.day)
    }
    console.log('총갯수=',el_arr.length)
    //오늘만 추출하여 테이블로 출력
    let todays = el_arr.filter((wt)=>{
      return wt.day==0
    })
    setResult(todays)
    console.log("todays=",todays)

  },[])


  return <>
    <h2>{title}</h2>
    <div>
      <table>
        <tbody>
        <tr>
          <th>시간</th>
      {result.map((et)=>{
        return <td>{et.hour}</td>        
      })}
      </tr>
        <tr>
          <th>기온</th>
      {result.map((et)=>{
        return <td>{et.temp}°C</td>        
      })}
      </tr>
      <tr>
          <th>날씨</th>
      {result.map((et)=>{
        return <td>{et.wfkor}</td>        
      })}
      </tr>
      <tr>
          <th>습도</th>
      {result.map((et)=>{
        return <td>{et.reh}</td>        
      })}
      </tr>
      </tbody>
      </table>
    </div>
  </>
}

const WebCrawlerForm = ({ onResults }) => {
  const [result, setResult] = useState('');
  const [url, setUrl] = useState('');
  const [breakPoint, setBreakPoint] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

        let addr = '/webcrawler/scan'
        fetch( addr , {
            method: 'POST', //새로운값 추가시 POST
            body: JSON.stringify({url:url}),//추가할객체
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        .then((response) => response.json())
        .then((json) => {
            console.log(json.text)
            setResult(  <Weather weatherXml={json.text}/> )
            // console.log(img);
        });


  };

  const handleClear = () => {
    setUrl('');
    setBreakPoint('');
  };

  return (
    <>
    <h1>WebCrawlerForm</h1>
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="url" className="form-label">URL:</label>
        <input
          type="text"
          id="url"
          className="form-control"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          />
      </div>
      <div className="mb-3">
        <label htmlFor="breakPoint" className="form-label">Breakpoint:</label>
        <input
          type="text"
          id="breakPoint"
          className="form-control"
          value={breakPoint}
          onChange={(e) => setBreakPoint(e.target.value)}
          />
      </div>
      <button type="submit" className="btn btn-primary me-2 custom-button">Scan</button>
      <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>
    </form>
    <hr></hr>
    <p>http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=1165051000</p>
    <div id="result">
      {result}
    </div>
          </>
  );
};

export default WebCrawlerForm;
