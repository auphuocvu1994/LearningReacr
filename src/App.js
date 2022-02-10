// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { Component } from 'react/cjs/react.production.min';

//State props
//Stateless
// function App() {
//   return (
//     // JSX 
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//Co 2 kieu Component trong React
// + Class Compononent  (Stalefull Component) -> hiểu rõ hơn về lifecycle
// + Function Component (Staleless Component)

// Class component 
class App extends React.Component {
  // render bat buoc phai co trong class component 
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
