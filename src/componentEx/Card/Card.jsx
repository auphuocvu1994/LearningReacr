// import logo from './logo.svg';
import './style.css';
import React from 'react';

class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{ id: "1", name: "Dinh Nam", "job": "Fullstack Developer", "img": `${process.env.PUBLIC_URL}/image/aNam.jpg` }, { id: "2", "name": "Minh Thai", "job": "Fullstack Developer", "img": `${process.env.PUBLIC_URL}/image/aThai.jpg` }, { id: "3", "name": "Cuong Nv", "job": "Fullstack Developer", "img": `${process.env.PUBLIC_URL}/image/aCuong.jpg` }]
        }
    }
    // const data = [{ id: "1", name: "Dinh Nam", "job": "Fullstack Developer", "img": `${process.env.PUBLIC_URL}/image/aNam.jpg` }, {id: "2", "name": "Minh Thai", "job": "Fullstack Developer", "img": `${process.env.PUBLIC_URL}/image/aThai.jpg` }, {id: "3", "name": "Cuong Nv", "job": "Fullstack Developer", "img": `${process.env.PUBLIC_URL}/image/aCuong.jpg` }];

    render() {

        return (
            <div className="container">
                {this.state.data.map((obj, index) =>

                    <div className="card" key={index}>
                        <div className="card__image">
                            <img src={obj.img} alt="img-nike" />
                        </div>
                        <span className="card__name" key={obj.name}>{obj.name}</span>
                        <span className="card__title">{obj.job}</span>
                        <div className="card__media">
                            <span><i className="fab fa-facebook-f"></i></span>
                            <span><i className="fab fa-youtube"></i></span>
                            <span><i className="fab fa-tiktok"></i></span>
                            <span><i className="fab fa-github-square"></i></span>
                        </div>
                        <button className="btn btn-contact">Contact me</button>
                    </div>

                )}
            </div>
        );
    }
}

export default Card;