import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {  setFavorite } from '../actions'

import '../assets/styles/components/CarouselItem.scss';
import newMovie from "../assets/icons/new.png";
import play from "../assets/icons/play.png";
import download from "../assets/icons/download.png";

const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration } = props;
    const handleSetFavorite = () => {
        props.setFavorite({
           id, cover, title, year, contentRating, duration
        })
    }
    return (
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
                    <img src={download} alt="Download" onClick={handleSetFavorite} />
                </div>
            </div>
        </div>
    )
};

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
};

const mapDispatchToProps = {
    setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);