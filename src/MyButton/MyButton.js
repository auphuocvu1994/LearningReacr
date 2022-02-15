// import logo from './logo.svg';
import './style.css';
import React from 'react';

class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleLatinButton=this.handleLatinButton.bind(this);
    }
    state = {
        item: ""
    };

    handleInput(e) {
        // this.setState += e.target.value;
        this.setState({ item: this.state.item + e.target.value });
        console.log(this.state.item);

    }

    handleLatinButton = value => {
        this.setState({ item: this.state.item + value });
      };


    render() {
        const arr = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/']
        const listItems = arr.map((numbers) =>
            <button value={numbers} onClick={e => this.handleInput(e, "value")}>{numbers}</button>
        );
        return (
            <div className='block-number'>
                {listItems}
            </div>
        );
    }
}

export default MyButton;