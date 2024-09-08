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
    setResult(el_arr)
    //오늘만 추출하여 테이블로 출력
    // let todays = el_arr.filter((wt)=>{
    //   return wt.day==0
    // })
    // setResult(todays)
    // console.log("todays=",todays)

  },[])

  let days = "오늘,내일,모레".split(",")

  return <>
    <h2>{title}</h2>
    <div>
      <ul>
      {result.map((wt, index)=>{
        return <li key={index}>{days[wt.day]}~{wt.hour}시,{wt.temp}°C, {wt.wfkor} </li>        
      })}
      </ul>
      
    </div>
  </>
}

function News(props){
  const { newsHtml } = props
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState('');

useEffect(()=>{
  let el_arr = []

  var parser = new DOMParser();
  var doc = parser.parseFromString(newsHtml, 'text/html');
  let ctg = doc.querySelector("title").textContent
  setTitle(ctg)//
  let news = doc.querySelectorAll("div.sa_item_flex")
  for(let n of news){
    let href = n.querySelector("div.sa_text>a").getAttribute("href")
    let sa_text = n.querySelector(".sa_text_strong")
    el_arr.push({title:sa_text.textContent,href:href})
  }
  setResult(el_arr)
},[])

  return <>
      <h2>{title}</h2>
    <div>
    {result.map((el,index)=>{
      return <p key={index}><a href={el.href}>{el.title}</a></p>
    })}
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
        method: 'POST', //통신방식
        body: JSON.stringify({url:url}),//전송데이터
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    .then((response) => response.json())
    .then((json) => {
        // console.log("json.text ",json.text)
        console.log("json.url ",json.url)
        console.log("json.url ",typeof(json.url))
        if(json.url.indexOf("www.kma.go.kr")>=0){
          setResult(  <Weather weatherXml={json.text}/> )
        }else if(json.url.indexOf("news.naver.com")>=0){
          setResult(  <News newsHtml={json.text}/> )
        }
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
      <button type="submit" className="btn btn-primary me-2 custom-button">Scan</button>
      <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>
    </form>
    <hr></hr>
    <p>기상청 서울 서초구 서초동 시간별예보 RSS 링크: http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=1165051000</p>
    <p>네이버 신문 IT/과학 링크: https://news.naver.com/section/105</p>
    <div id="result">
      {result}
    </div>
          </>
  );
};

export default WebCrawlerForm;
