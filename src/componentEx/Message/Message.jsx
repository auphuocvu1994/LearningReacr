import './style.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const color = ['#16a085', '#27ae60', '#2c3e50',
    '#f39c12', '#e74c3c', '#9b59b6',
    '#FB6964', '#342224', "#472E32",
    "#BDBB99", "#77B1A9", "#73A857"]


class Message extends React.Component {

    constructor() {
        super()
        this.state = { //state is by default an object


            lstArr: [],
            addColor: '',
            detailMes: '',
            author: ''
        }
    }

    async componentDidMount() {
        // try {
        //     const rawData= await fetch('http://jsonplaceholder.typicode.com/users')
        //     const data= wait rawData.json()
        //     this.setState({ lstArr: data })

        // } catch (error) {
        //     console.log(error)
        // }


        await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ lstArr: data.quotes })
            })
            .catch(console.log)
    }

    generateRandom = (e) => {
        let addColor = color.indexOf(color[Math.floor(Math.random() * color.length)]);
        this.setState({ addColor }, () => this.addStyle());

        let detailMes = this.state.lstArr[Math.floor(Math.random() * this.state.lstArr.length)].quote;
        let author = this.state.lstArr[Math.floor(Math.random() * this.state.lstArr.length)].author;
        
        this.setState({ detailMes });
        this.setState({ author });

    }

    addStyle() {

    }

    render() {
        return (
            <div>
                <div className="alert alert-primary" style={{ backgroundColor: color[this.state.addColor] }} role="alert">
                    <p className="fw-bold text-white">
                        {this.state.detailMes}
                    </p>
                    <span className="text-white">- {this.state.author} -</span>
                </div>

                <button className="btn btn-primary" style={{ backgroundColor: color[this.state.addColor] }} onClick={this.generateRandom}>Change</button>
            </div>
        )
    }
}

export default Message;