// import logo from './logo.svg';
import './App.css';
// import Cal from './Component/Caculator/Cal';
// import Card from './Component/Card/Card';
// import Calculator from './component/Caculator/CaculatorUseMap';
// import Clock from './component/Clock/Process';
// import GridBtnAudio from './componentEx/GridBtnAudio/GridBtn';
// import Input from './componentEx/Input/InputShowText';
import Search from './componentEx/Search/Search';
import Test from './componentEx/Search/Test';

import React from 'react';

// Class component 
class App extends React.Component {
  // render bat buoc phai co trong class component 
  render() {
    return (
      <div className="App">
        {/* <h1>Calculator</h1> */}
        {/* Caculator use Button Component */}
        {/* <Cal/> */}

        {/* Caculator use Map render list button  */}
        {/* <Calculator></Calculator> */}
        {/* Card  */}
        {/* <Card ></Card> */}
        {/* <Clock></Clock> */}

        {/* <GridBtnAudio></GridBtnAudio> */}
        {/* <Input></Input> */}

        <Search></Search>

        <Test></Test>
      </div>
    );
  }
}

export default App;
