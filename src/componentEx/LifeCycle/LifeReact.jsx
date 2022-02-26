import React from 'react';

class Message extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            value : ''
        }

        console.log('Constructor');
    }

    componentWillMount(){
        console.log('componentWillMount');
    }


    componentDidMount() {
        console.log('componentDidMount');
    }


    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate');

    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');

    }

    componentWillUnmount(){
        console.log('componentWillUnmount');

    }

    render() {
        console.log('render');
        return(
            <div></div>
        )
    }
}
export default Message;