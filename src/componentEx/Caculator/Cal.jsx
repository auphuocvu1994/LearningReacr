// import logo from './logo.svg';
import './style.css';
import React from 'react';

class Button extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    //Hàm click khi click thì lấy props handleButton bán bằng props letter
    onClick() {
        this.props.handleButton(this.props.letter);
    }

    render() {
        // click thì gọi hàm click - còn text button thì lấy từ props letter
        return (<button onClick={this.onClick}>{this.props.letter}</button>);
    }
}



class Cal extends React.Component {

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

        if (valueBtn == '=') {
            if (this.state.question !== '') {
                var ans = '';
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

                else if (ans == 'Infinity')
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
        } else {
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
                        <Button letter="7" handleButton={this.clickNumButton} />
                        <Button letter="8" handleButton={this.clickNumButton} />
                        <Button letter="9" handleButton={this.clickNumButton} />
                        <Button letter="+" handleButton={this.clickNumButton} />
                        <Button letter="4" handleButton={this.clickNumButton} />
                        <Button letter="5" handleButton={this.clickNumButton} />
                        <Button letter="6" handleButton={this.clickNumButton} />
                        <Button letter="-" handleButton={this.clickNumButton} />
                        <Button letter="1" handleButton={this.clickNumButton} />
                        <Button letter="2" handleButton={this.clickNumButton} />
                        <Button letter="3" handleButton={this.clickNumButton} />
                        <Button letter="*" handleButton={this.clickNumButton} />
                        <Button letter="0" handleButton={this.clickNumButton} />
                        <Button letter="." handleButton={this.clickNumButton} />
                        <Button letter="=" handleButton={this.clickNumButton} />
                        <Button letter="/" handleButton={this.clickNumButton} />
                    </div>

                </div>
            </div>
        );
    }
}

export default Cal;