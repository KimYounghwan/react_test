import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import MyBoard from './MyBoard';

function RequestForm(props){
  const [value, setValue] = useState("")

  function handleChange(e){
    setValue(e.target.value)
  }
  function handleSubmit(e){
    alert('요청사항:'+value)
    e.preventDefault();
  } 
  return (
    <form onSubmit={handleSubmit}>
      <label>요청사항
        <textarea value={value} onChange={handleChange}></textarea>
      </label>
      <button type='submit'>제출</button>
    </form>
  )
}

function FruiSelect(props){
  const [value, setValue] = useState('grape')
  function handleSubmit(e){
    e.preventDefault()
    alert("과일="+value)
  }
  function handleChange(e){
    setValue(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일선택
        <select value={value} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
        </select>
      </label>
      <button type='submit'>제출</button>
    </form>
  )
}

function Reservation(props){
  function handleSubmit(e){

  }
  return (
    <form onSubmit={handleSubmit}>
      Hello
    </form>
  )
}

export default function App(props){

  return (
    <MyBoard onClick={(a,b)=>{
      console.log(a,b)
    }}/>
  )
}