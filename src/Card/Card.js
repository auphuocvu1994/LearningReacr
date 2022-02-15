// import logo from './logo.svg';
import './style.css';
import React from 'react';
import image_aNam from '../image/aNam.jpg'
import image_aThai from '../image/aThai.jpg'
import image_aCuong from '../image/aCuong.jpg'

class Card extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const data = [{ id: "1", name: "Dinh Nam", "job": "Fullstack Developer", "img": image_aNam }, {id: "2", "name": "Minh Thai", "job": "Fullstack Developer", "img": image_aThai }, {id: "3", "name": "Cuong Nv", "job": "Fullstack Developer", "img": image_aCuong }];
        const listItems = data.map((obj, index) =>

            <div class="card" key={index}>
                <div class="card__image">
                    <img src={obj.img} alt="img-nike" />
                </div>
                <span class="card__name" key={obj.name}>{obj.name}</span>
                <span class="card__title">{obj.job}</span>
                <div class="card__media">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                    <a href="#"><i class="fab fa-github-square"></i></a>
                </div>
                <button class="btn btn-contact">Contact me</button>
            </div>

        );

        return (
            <div class="container">
                {listItems}
            </div>
        );
    }
}

export default Card;