import React from 'react';
import '../assets/styles/components/CarouselItem.scss'

import newMovie from "../assets/icons/new.png";
import play from "../assets/icons/play.png";
import download from "../assets/icons/download.png"

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
            <p className="carousel-item__details--title"> {title} </p>
            <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
            </p>

            <div className="carousel-item__buttons">
                <img className="carousel-item__newImg" src={newMovie} alt="New" />
                <img src={play} alt="Play" />
                <img src={download} alt="Download" />
            </div>
        </div>
    </div>
);

export default CarouselItem;