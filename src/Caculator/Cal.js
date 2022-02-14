// import logo from './logo.svg';
import './style.css';
import Button from '../Button/Button';
import React from 'react';

class Cal extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='calculator-wrapper'>
                <div className="form-group">
                    <div className='input-group'>
                        <label for=""></label>
                        <input type="text"
                            class="form-control" name="" id="" aria-describedby="helpId" placeholder="Phep tinh" />
                        {/* <small id="helpId" class="form-text text-muted">Help text</small> */}
                        <label for=""></label>
                        <input type="text"
                            class="form-control" name="" id="" aria-describedby="helpId" placeholder="Ket qua" />
                        {/* <small id="helpId" class="form-text text-muted">Help text</small> */}
                    </div>
                    <button className='btn-Submit'>AC</button>
                    <Button></Button>
                </div>
            </div>
        );
    }
}

export default Cal;