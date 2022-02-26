import './style.css';
import React from 'react';

class Titles extends React.Component {
  render() {
    return (
      <div id="titles">
        <h1>Pomodoro Clock</h1>
        <h3>Created in React.js by Derek Smith</h3>
      </div>
    )
  }
};

class Buttons extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
      <div class="background">
        <div class="break-session-layout">
          <h3 id="break-label">Break Length</h3>
          <a id="break-increment" onClick={this.props.incrementBreaktime}><i class="fas fa-angle-double-up"></i></a>
          <h6 id="break-length">{this.props.breaktime}</h6>
          <a id="break-decrement" onClick={this.props.decrementBreaktime}><i class="fas fa-angle-double-down"></i></a>
          <h3 id="session-label">Session Length</h3>
          <a id="session-increment" onClick={this.props.incrementSessiontime}><i class="fas fa-angle-double-up"></i></a>
          <h6 id="session-length">{this.props.sessiontime}</h6>
          <a id="session-decrement" onClick={this.props.decrementSessiontime}><i class="fas fa-angle-double-down"></i></a>
        </div>
      </div>
    )
  }

};

class Timer extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div id="timer-display">
        <h3 id="timer-label">{this.props.displayName}</h3>
        <h6 id="time-left">{this.props.placeholder}{this.props.minutes}:{this.props.secondsPlaceholder}{this.props.seconds}</h6>
        <a id="start_stop" onClick={this.props.play}><i class={this.props.icon}></i></a>
        <a id="reset" onClick={this.props.reset}><i class="fas fa-redo"></i></a>
        <audio id="beep"><source src="https://goo.gl/65cBl1" /></audio>
      </div>
    )
  }

};

class TimerControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breaktime: 5,
      sessiontime: 25,
      displayName: "Session",
      minutes: 25,
      seconds: "00",
      running: false,
      icon: "fas fa-play",
      placeholder: "",
      secondsPlaceholder: "",
      interval: 0
    };
    this.incrementBreaktime = this.incrementBreaktime.bind(this);
    this.decrementBreaktime = this.decrementBreaktime.bind(this);
    this.incrementSessiontime = this.incrementSessiontime.bind(this);
    this.decrementSessiontime = this.decrementSessiontime.bind(this);
    this.reset = this.reset.bind(this);
    this.decrement = this.decrement.bind(this);
    this.toggleRun = this.toggleRun.bind(this);
    this.start = this.start.bind(this);
    this.play = this.play.bind(this);
  };

  play() {
    const interval = setInterval(this.decrement, 1000);
    this.setState({
      interval: interval
    })
  }

  decrementTime() {
    this.setState({
      seconds: this.state.seconds - 1
    })
    console.log(this.state.seconds)
  };

  start() {
    const interval = this.state.interval;
    if (this.state.running === false) {
      this.toggleRun();
      this.play();
    } else {
      clearInterval(interval);
      this.toggleRun();
    }
  };


  toggleRun() {
    this.setState(state => {
      if (this.state.running === true) {
        return { running: false, icon: "fas fa-play" }
      } else {
        return { running: true, icon: "fas fa-pause" }
      }
    });
  }

  decrement() {
    if (this.state.running === true) {
      if (this.state.seconds == 0) {
        this.setState({
          seconds: 59,
          minutes: this.state.minutes - 1,
          secondsPlaceholder: "",
        })
      } else if (this.state.seconds < 11) {
        this.setState({
          secondsPlaceholder: 0,
          seconds: this.state.seconds - 1
        })
      } else if (this.state.minutes < 10) {
        this.setState({
          placeholder: 0,
          seconds: this.state.seconds - 1
        })
      }

      else {
        this.setState({
          seconds: this.state.seconds - 1,
          placeholder: ""
        })
      }
    } else if (this.state.running === false) {
      ;
    } if (this.state.minutes > 10) {
      this.setState({
        placeholder: ""
      })
    } else if (this.state.minutes < 0 && this.state.displayName == "Session") {
      document.getElementById("beep").play();
      this.setState({
        displayName: "Break",
        minutes: this.state.breaktime,
        seconds: 0,
        running: true,
        secondsPlaceholder: 0
      })
    } if (this.state.minutes < 0 && this.state.displayName == "Break") {
      document.getElementById("beep").play();
      this.setState({
        displayName: "Session",
        minutes: this.state.sessiontime,
        seconds: "00"
      })
    }
  };


  reset() {
    this.setState({
      breaktime: 5,
      sessiontime: 25,
      displayName: "Session",
      minutes: 25,
      seconds: "00",
      running: false,
      icon: "fas fa-play",
      placeholder: ""
    })
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    console.log(this.state.running);
  };

  incrementBreaktime() {
    if (this.state.breaktime == 60) {
      this.setState({
        breaktime: 60
      });
    } else {
      this.setState({
        breaktime: this.state.breaktime + 1
      })
    }
  };

  decrementBreaktime() {
    if (this.state.breaktime === 1) {
      this.setState({
        breaktime: 1
      });
    } else {
      this.setState({
        breaktime: this.state.breaktime - 1
      })
    }
  };

  incrementSessiontime() {
    if (this.state.minutes === 60) {
      ;
    } else {
      this.setState({
        sessiontime: this.state.sessiontime + 1,
        minutes: this.state.minutes + 1,
      });
    }
  };

  decrementSessiontime() {
    if (this.state.minutes === 1) {
      this.setState({
        sessiontime: 1,
        minutes: 1
      });
    } else {
      this.setState({
        sessiontime: this.state.sessiontime - 1,
        minutes: this.state.minutes - 1,
      });
    }
  };


  render() {
    return (
      <div>
        <Titles />
        <Buttons breaktime={this.state.breaktime} sessiontime={this.state.sessiontime} incrementBreaktime={this.incrementBreaktime} decrementBreaktime={this.decrementBreaktime} incrementSessiontime={this.incrementSessiontime} decrementSessiontime={this.decrementSessiontime} />
        <Timer displayName={this.state.displayName} minutes={this.state.minutes} seconds={this.state.seconds} reset={this.reset} play={this.start} icon={this.state.icon} secondsPlaceholder={this.state.secondsPlaceholder} placeholder={this.state.placeholder} />
      </div>
    )
  }
};

export default TimerControl;



