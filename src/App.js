
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counter"; 


function App() { 
  
  const counter = useSelector((state) => state.counter); // Get state counter
  const dispatch = useDispatch(); 
  return ( 
  <div> 
    <h1>Counter {counter}</h1> 
    <button onClick={() => dispatch(increment(1))}>Increment</button> 
    <button onClick={() => dispatch(decrement(1))}>Decrement</button> 
  </div> );
} 

export default App;


// // import logo from './logo.svg';
// import './App.css';
// // import Cal from './Component/Caculator/Cal';
// // import Card from './Component/Card/Card';
// import Calculator from './componentEx/Caculator/CaculatorUseMap';
// // import Clock from './component/Clock/Process';
// // import GridBtnAudio from './componentEx/GridBtnAudio/GridBtn';
// // import Input from './componentEx/Input/InputShowText';
// // import Search from './componentEx/Search/Search';
// import Message from './componentEx/Message/Message';
// // import LifeCycle from './componentEx/LifeCycle/LifeReact';
// // import CountDown from './componentEx/LifeCycle/CountDown';
// // import TimerControl from './componentEx/LifeCycle/TimerControl';
// // import Hook from './componentEx/FunctionComponent/Hook';
// import GetListUserUseHook from './componentEx/FunctionComponent/GetListUserUseHook';
// import ToDoApp from './componentEx/ToDoList/ToDo';
// import Login from './componentEx/Login/Login';
// import Register from './componentEx/Register/Register';
// // import Test from './componentEx/Search/Test';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav } from 'react-bootstrap';

// import { createStore } from "redux";

// import { Routes, Route, Link, Navigate } from "react-router-dom";

// import React from 'react';


// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem('auth')

//   if (token) {
//     return <Navigate to={'/getListUser'} />
//   }

//   return children
// }
// const LogOut = ({ children }) => {

//   localStorage.removeItem('auth')

//   return children
// }


// const routerConfig = [{
//   label: 'Home',
//   component:
//     <PrivateRoute>
//       <Login />
//     </PrivateRoute>,
//   path: "/"
// },
// {
//   label: 'Calculator',
//   component: <Calculator />,
//   path: "/calculator"
// },
// {
//   label: 'List User',
//   component: <GetListUserUseHook />,
//   path: "/getListUser"
// },
// {
//   label: 'To Do App',
//   component: <ToDoApp />,
//   path: "/toDoApp"
// },
// {
//   label: 'Login',
//   component: <Login />,
//   path: "/login"
// },
// {
//   label: 'Logout',
//   component:
//     <LogOut>
//       <Login />
//     </LogOut>
//   ,
//   path: "/logout"
// },
// {
//   label: 'Register',
//   component:
//     <Register />
//   ,
//   path: "/register"
// }
// ]


// // REDUCER
// const counter = (state = 0, action) => {
//   switch (action.type) { 
//     case "INCREMENT": 
//       return state + 1; 
//     case "DECREMENT": 
//       return state - 1; 
//     }
// }; 
// // CREATE STORE

// let store = createStore(counter); //  ta gọi dispatch từ store và truyền vào action.
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

// // Class component 
// class App extends React.Component {
// // render bat buoc phai co trong class component 
// render() {
//   return (
//     <div className="App">
//       {/* <h1>Calculator</h1> */}
//       {/* Caculator use Button Component */}
//       {/* <Cal/> */}

//       {/* Caculator use Map render list button  */}
//       {/* <Calculator></Calculator> */}
//       {/* Card  */}
//       {/* <Card ></Card> */}
//       {/* <Clock></Clock> */}

//       {/* <GridBtnAudio></GridBtnAudio> */}
//       {/* <Input></Input> */}

//       {/* <Search></Search> */}

//       {/* <CountDown></CountDown> */}


//       {/* <TimerControl></TimerControl> */}
//       {/* <Message></Message> */}
//       {/* <LifeCycle></LifeCycle> */}
//       {/* <Test></Test> */}

//       {/* <Hook></Hook> */}

//       {/* <GetListUserUseHook></GetListUserUseHook> */}

//       {/* <ToDoApp></ToDoApp> */}

//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="">
//           <Link className='nav-link' key={routerConfig[0].path} to={routerConfig[0].path}>Logo Branch</Link>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {
//               routerConfig.map((item) => {
//                 return (
//                   <Link className='nav-link' key={item.path} to={item.path}>{item.label}</Link>
//                 )
//               })
//             }

//             {/* <Nav.Link href="#home">Home</Nav.Link>
//                 <Nav.Link href="#link">Link</Nav.Link> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>


//       <Routes>
//         {
//           routerConfig.map((item) => {
//             return (
//               <Route key={item.path} path={item.path} element={item.component} />
//             )
//           })
//         }
//       </Routes>
//     </div>
//   );
// }
// }

// export default App;
