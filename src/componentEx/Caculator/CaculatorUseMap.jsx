// import logo from './logo.svg';
import './style.css';
import React from 'react';

// class Button extends React.Component {
//     constructor() {
//         super();
//         this.onClick = this.onClick.bind(this);
//     }

//     //Hàm click khi click thì lấy props handleButton bán bằng props letter
//     onClick() {
//         this.props.handleButton(this.props.letter);
//     }

//     render() {
//         // click thì gọi hàm click - còn text button thì lấy từ props letter
//         return (<button onClick={this.onClick}>{this.props.letter}</button>);
//     }
// }



class CaculatorUseMap extends React.Component {

    constructor(props) {
        super(props);
        // this.handleLatinButton = this.handleLatinButton.bind(this);
        this.arr = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/'];
    }

    //Gan gia tri mac dinh cho state
    state = {
        question: "",
        answer: ""
    };
    // Event AC
    resetAC = () => {
        this.setState({ question: '', answer: '' });
    }
    // Event C
    removeC = () => {
        var str = this.state.question;
        str = str.substr(0, str.length - 1);
        this.setState({ question: str });
    }

    clickNumButton = valueBtn => {

        valueBtn = valueBtn.target.value;

        if (valueBtn === '=') {
            if (this.state.question !== '') {
                var ans = '';
                /* eslint-disable */
                try {
                    ans = eval(this.state.question);
                }
                catch (err) {
                    this.setState({
                        answer: " Error"
                    });
                }

                if (ans === undefined)
                    this.setState({
                        answer: " Error"
                    });

                else if (ans === 'Infinity')
                    this.setState({
                        answer: " Error"
                    });
                else
                    this.setState({
                        answer: ans,
                        question: this.state.question
                    });
            } else {
                this.setState({ question: '', answer: '' });
            }
        }else{
            this.setState({ question: this.state.question += valueBtn })
        }
    };


    render() {
        return (
            <div className='calculator-wrapper'>
                <div className="form-group">
                    <div className='input-group'>
                        <input type="text" readOnly
                            className="form-control" placeholder="Phep tinh"

                            value={this.state.question}

                        />
                        <input type="text" readOnly
                            className="form-control" placeholder="Ket qua"

                            value={this.state.answer}
                        />
                    </div>

                    <div className='group-btn'>
                        <button className='btn-Submit' onClick={this.resetAC}>AC</button>
                        <button className='btn-Remove' onClick={this.removeC}>C</button>

                    </div>

                    <div className='block-number'>
                        {this.arr.map((numbers) =>
                            <button
                                value={numbers}
                                onClick={e => this.clickNumButton(e)}
                                key={numbers} >{numbers}</button>
                        )
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default CaculatorUseMap;