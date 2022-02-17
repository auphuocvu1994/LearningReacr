// import logo from './logo.svg';
import './style.css';
import React from 'react';

class MyButton extends React.Component {

    constructor(props) {
        super(props);
        // this.handleLatinButton = this.handleLatinButton.bind(this);
        this.arr = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/'];
    }
    state = {
        item: ""
    };

    handleInput(e) {
        // this.setState += e.target.value;
        this.setState({ item: this.state.item + e.target.value });
        console.log(this.state.item);

    }

    // handleLatinButton = value => {
    //     this.setState({ item: this.state.item + value });
    // };


    render() {

        return (
            <div className='block-number'>
                {this.arr.map((numbers) =>
                    <button value={numbers} onClick={e => this.handleInput(e, "value")} key={numbers}>{numbers}</button>
                )}
            </div>
        );
    }
}

export default MyButton;