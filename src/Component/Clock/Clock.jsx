import React from "react";
class Clock extends React.Component {

    render(){
        return(
            <div>
                <span>Dong ho hien thi </span>
                {this.props.time.toString()}
            </div>

        );
    }

}

export default Clock;