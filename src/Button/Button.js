// import logo from './logo.svg';
import './style.css';
import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const arr = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/']
        const listItems = arr.map((numbers) =>
            <button>{numbers}</button>
        );
        return (
            <div className='block-number'>
                {listItems}
            </div>
        );
    }
}

export default Button;