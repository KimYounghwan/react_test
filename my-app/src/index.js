import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
// import Fetch_01 from './fetch_app/Fetch_01';
// import NumberGuessGame from './fetch_app/NumberGuessGame';
import JSONPlaceholder01 from './react_spring/JSONPlaceholder01';
import FormSpring01 from './react_spring/UserAuthSpring01';
import WebCrawlerForm from './comp/WebCrawlerForm';
import MenupanCrud01 from './menu_crud/MenupanCrud01';
import OrderCrud from './menu_crud/OrderCrud';
import UserAuthSpring01 from './react_spring/UserAuthSpring01';
// import ExampleCss from './react_bs/ExampleCss';
// import ContainerExample from './react_bs/ContainerExample';
// import AutoLayoutExample from './react_bs/AutoLayoutExample';
// import VerticalExample from './react_bs/VerticalExample';
// import HorizontalExample from './react_bs/HorizontalExample';
// import ButtonExample from './react_bs/ButtonExample';
// import OutlineTypesExample from './react_bs/OutlineTypesExample';
// import TextControlsExample from './react_bs/TextControlsExample';
// import RouterApp from './react_router/RouterApp';
// import GawibawiboGame from './gbb/GawibawiboGame';
// import App from './mini-blog/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Counter3></Counter3>
// )
root.render(
    <UserAuthSpring01 />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
