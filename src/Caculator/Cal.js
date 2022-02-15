// import logo from './logo.svg';
import './style.css';
// import Button from '../Button/MyButton';
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
        return (<button onClick={this.props.onClick}>{this.props.letter}</button>);
    }
}



class Cal extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    //Gan gia tri mac dinh cho state
    state = {
        item: "",
        value: ""
    };

    clickNumButton = value_Btn => {
        this.setState({ item: this.state.item + value_Btn });
    };


    render() {
        return (
            <div className='calculator-wrapper'>
                <div className="form-group">
                    <div className='input-group'>
                        <input type="text" readOnly 
                            class="form-control"  placeholder="Phep tinh"

                            value={this.state.item}

                        />
                        <input type="text" readOnly 
                            class="form-control" placeholder="Ket qua" />
                    </div>

                    <button className='btn-Submit'>AC</button>

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