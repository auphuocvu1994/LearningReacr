import './style.css';
import React from 'react';

class SettingTime extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    onClickUp = (e) => {
        this.props.handerClick(this.props.label, 'up');
    }
    onClickDown = (e) => {
        this.props.handerClick(this.props.label, 'down');
    }

    render() {
        return (
            <div>
                <h2>{this.props.label}</h2>
                <div className='group-btn'>
                    <button className="btn btn-primary" onClick={this.onClickUp}>
                        <i className="fas fa-arrow-up"></i>
                    </button>
                    <h2>{this.props.timer}</h2>
                    <button className="btn btn-primary" onClick={this.onClickDown}>
                        <i className="fas fa-arrow-down"></i>
                    </button>
                </div>
            </div>
        )
    }

}


class CountDown extends React.Component {

    constructor() {
        super();
        this.state = {
            break: 10,
            currentBreak: 1,
            session: 20,
            sessionBreak: 2,
            display: 20,
            status: "stopped",
            type: "Session",
            intervalID: ""
        }

        this.process = null;
    }


    // Up and down arrow button
    handerClick = (type, act) => {
        if (type === 'Break Length') {
            if (act === 'up') {
                this.setState({
                    break: this.state.break + 1
                }, () => this.setTimerDisplay(this.state.session))
            } else {
                this.setState({
                    break: this.state.break - 1
                }, () => this.setTimerDisplay(this.state.session))
            }

        } else if (type === 'Session Length') {
            if (act === 'up') {
                this.setState({
                    session: this.state.session + 1
                }, () => this.setTimerDisplay(this.state.session))
            } else {
                this.setState({
                    session: this.state.session - 1
                }, () => this.setTimerDisplay(this.state.session))
            }
        }
    }

    //Set timee display after set time session
    setTimerDisplay(e) {
        this.setState(
            {
                display: this.state.session * 60,
            }
        )
    }


    startTimer() {
        console.log(this.state.display);

        if (this.state.display > 0) {
            this.process = setInterval(this.countDownSession, 1000);
        }
    }

    countDownSession = () => {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.display - 1;
        this.setState({
            display: seconds
            //   seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds === -1) {

            clearInterval(this.process);
            if (this.state.type === 'Session') {
                this.setState({
                    type: 'Break',
                    display: this.state.break
                });
            } else {
                this.setState({
                    type: 'Session',
                    display: this.state.session
                });
            }
            this.process = setInterval(this.countDownBreak, 1000);
        }
    }

    countDownBreak = () => {
        let seconds = this.state.display - 1;
        this.setState({
            display: seconds
            //   seconds: seconds,
        });
        if (seconds === -1) {
            clearInterval(this.process);
            if (this.state.type === 'Session') {
                this.setState({
                    type: 'Break',
                    display: this.state.break
                });
            } else {
                this.setState({
                    type: 'Session',
                    display: this.state.session
                });
            }
            this.process = setInterval(this.countDownSession, 1000);
        }
    }

    resetTimer = () => {
        clearInterval(this.process);
        this.setState({
            break: 10,
            currentBreak: 1,
            session: 20,
            sessionBreak: 2,
            display: 20,
            status: "stopped",
            type: "Session",
            intervalID: ""
        })
    }


    render() {
        return (
            <div className='wrap-content'>

                <div className='wrapcontent__setting'>
                    <SettingTime
                        label='Break Length'
                        timer={this.state.break}
                        handerClick={this.handerClick}
                    ></SettingTime>

                    <SettingTime
                        label='Session Length'
                        timer={this.state.session}
                        handerClick={this.handerClick}
                    ></SettingTime>
                </div>

                <div className='wrapcontent__infor'>
                    <span className='wrapcontent__infor--title'>{this.state.type}</span>
                    <span className='wrapcontent__infor--clock'>{this.state.display}</span>

                    <div className='wrapcontent__infor--group-btn'>
                        <button className="btn btn-primary" onClick={() => this.startTimer()}>
                            <i className="fas fa-play"></i>
                            <i className="fas fa-stop"></i>
                        </button>
                        <button className="btn btn-primary" onClick={() => this.resetTimer()}>
                            <i className="fas fa-undo"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountDown;