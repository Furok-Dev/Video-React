import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
//Referenciamos/importamos los iconos
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
        <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

//Vamos a validar con el paquete prop-types

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  config: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;