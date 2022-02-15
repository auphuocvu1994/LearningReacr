// import logo from './logo.svg';
import './style.css';
import React from 'react';
import image_aNam from '../image/aNam.jpg'
import image_aThai from '../image/aThai.jpg'
import image_aCuong from '../image/aCuong.jpg'

class Card extends React.Component {

    render() {
        const data = [{ id: "1", name: "Dinh Nam", "job": "Fullstack Developer", "img": image_aNam }, {id: "2", "name": "Minh Thai", "job": "Fullstack Developer", "img": image_aThai }, {id: "3", "name": "Cuong Nv", "job": "Fullstack Developer", "img": image_aCuong }];
        const listItems = data.map((obj, index) =>

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

        );

        return (
            <div className="container">
                {listItems}
            </div>
        );
    }
}

export default Card;