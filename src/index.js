import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducer/index";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />



const store = createStore(allReducers);

ReactDOM.render(
  // tHU VIẸN KIỂM SOÁT LỖI NẾU CÓ LÔI SẼ BÁO ƯARINING
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  <Provider store={store}> 
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}

  </Provider>,
  
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
