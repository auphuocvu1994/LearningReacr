import React from "react";
import Clock from './Clock'
class Process extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            times: new Date()
        }

        this.process = null;
    }

    start = () => {
        this.process = setInterval(() => {
            this.setState({
                times: new Date()
            })
        }, 1000);
    }

    end = () => {
        clearInterval(this.process)
    }

    render() {
        return (
            <div>
                <Clock time={this.state.times}></Clock>
                <button onClick={this.start}>Start</button>
                <button onClick={this.end}>End</button>
            </div>
        );
    }

}

export default Process;