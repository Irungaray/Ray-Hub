import React from 'react';
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="images/carousel (7).jpg" alt="People" />
        <div className="carousel-item__details">
            <p className="carousel-item__details--title">Faro del fin del Uruguay</p>
            <p className="carousel-item__details--subtitle">2021 +12 120 min.</p>

            <div className="carousel-item__buttons">
                <img className="carousel-item__newImg" src="icons/new.png" alt="New" />
                <img src="icons/play.png" alt="Play" />
                <img src="icons/download.png" alt="Download" />
            </div>
        </div>
    </div>
);

export default CarouselItem;