import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({mainColor, mainTitle, description, linkTo, linkDescription}) => {
    return (
        <div style={{backgroundColor: mainColor}}>
            <h1>{mainTitle}</h1>
            <span>{description}</span>
            <a href={linkTo}>{linkDescription}</a>
        </div>
    );
}

Banner.defaultProps = {
    mainColor: "red",
    mainTextColor: "white",
    mainTitle: "No se introdujo un título",
    description: "No hay una descripción disponible",
    linkTo: "#",
    linkDescription: "No hay una descripción disponible"

}

Banner.propTypes = {
    mainColor: PropTypes.string,
    mainTitle: PropTypes.string,
    description: PropTypes.string,
    linkTo: PropTypes.string,
    linkDescription: PropTypes.string
}

export default Banner; 