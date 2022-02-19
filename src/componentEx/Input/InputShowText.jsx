import React from "react";
import './style.css';

class InputShowText extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ""
        }

    }

    handleChange = (e) => {
        this.setState({
            text:e.target.value
        })
        console.log(e.target.value)
    }

    render() {
        return (
            <div>
                <input type="text" className="form-control" placeholder="Search..." defaultValue="Search..." onChange={this.handleChange}/>

                <textarea name="textArea" id="textArea" cols="30" rows="10" value={this.state.text}></textarea>
            </div>
        );
    }

}

export default InputShowText;