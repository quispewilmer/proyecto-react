import React from 'react';
import PropTypes from 'prop-types';

const Card = ({image, title, description}) => {
    return (
        <div className="cards-container__item">
            <img src={image} alt={title} className="cards-container__item__img"/>
            <h1 className="cards-container__item__title">{title}</h1>
            <p className="cards-container__item__description">{description}</p>
        </div>
    );
}

Card.propTypes= {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

Card.defaultProps = {
    image: "https://fotos.perfil.com/2020/05/29/trim/1280/720/evanescence-964189.jpg",
    title: "No se encontró el item",
    description: "No se encontró el item"
}

export default Card;