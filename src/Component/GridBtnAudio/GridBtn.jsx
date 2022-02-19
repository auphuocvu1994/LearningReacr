import './style.css';
import KeyButton from './KeyButton';
import React from 'react';



class GridBtn extends React.Component {
    constructor() {
        super()
        this.arr = [
            { id: "1", label: "Q", keyCode: "81", srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
            { id: "2", label: "W", keyCode: "87", srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
            { id: "3", label: "E", keyCode: "69", srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
            { id: "4", label: "A", keyCode: "65", srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
            { id: "5", label: "S", keyCode: "83", srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
            { id: "6", label: "D", keyCode: "68", srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
            { id: "7", label: "Z", keyCode: "90", srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
            { id: "8", label: "X", keyCode: "88", srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
            { id: "9", label: "C", keyCode: "67", srcAudio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },

        ];
    }



    render() {
        return (
            <div className='calculator-wrapper'>
                <div className="form-group">
                    <div className='block-number'>
                        {this.arr.map((i) =>
                            <KeyButton
                                value={i.keyCode} label={i.label} keyCode={i.keyCode} src={i.srcAudio}
                                key={i.id} />
                        )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default GridBtn;