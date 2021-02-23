import React from 'react';
import NotFoundPage from './NotFoundPage';

let cardsInfo = [
    {
        id: 1,
        image: "https://www.todorock.com/wp-content/uploads/2019/05/Amy-Lee-evanescence.jpg",
        title: "Hola",
        description: "Primera descripción"
    },{
        id: 2,
        image: "https://elintransigente.com/wp-content/uploads/2020/12/Evanescence.jpg",
        title: "Hola",
        description: "Primera descripción"
    },{
        id: 3,
        image: "https://www.todorock.com/wp-content/uploads/2019/05/Amy-Lee-evanescence.jpg",
        title: "Hola a todos",
        description: "Primera descripción"
    },{
        id: 4,
        image: "https://rock4spain.com/wp-content/uploads/2019/12/Evanescence.jpg",
        title: "Hola",
        description: "Primera descripción"
    }
]

const Poster = ({match}) => {
    console.log(match);

    const poster = cardsInfo.filter((cardInfo) => parseInt(match.params.id, 10) == cardInfo.id)[0];
    console.log(poster);

    return (poster ? (
        <div>
            <h1>{poster.title}</h1>
            <img src={poster.image} alt={poster.title}/>
        </div>
    ) : (
        <NotFoundPage />
    ));
}

export default Poster;