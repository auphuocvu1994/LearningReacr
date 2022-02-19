import './style.css';
import React from 'react';

class KeyButton extends React.Component {
    constructor() {
        super()
        this.state = {
            class: ""
        };

        this.process = null;
    }
    //Ham duoc chay sau khi render component
    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode + "" === this.props.keyCode) {
                var audio = new Audio(this.props.src);

                setTimeout(() => {
                    audio.play();
                    this.setState({ class: 'btnActive'});
                }, 1000);
                setTimeout(() => {
                    this.setState({ class: ''});
                }, 2000);
            }
        });
    }
    
    render() {
        return (
            <div
                className={`btnKey ${this.state.class}`}>
                {this.props.label}
            </div >
        );
    }

}

export default KeyButton;