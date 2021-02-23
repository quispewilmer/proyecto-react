import React from 'react';
import Card from './Card';

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
        title: "Hola",
        description: "Primera descripción"
    },{
        id: 4,
        image: "https://rock4spain.com/wp-content/uploads/2019/12/Evanescence.jpg",
        title: "Hola",
        description: "Primera descripción"
    }
]

const CardGrid = (props) => {
    return (
        <div className="cards-container">
            {cardsInfo.map((cardInfo) => {
                return(
                    <Card id={cardInfo.id} image={cardInfo.image} title={cardInfo.title} description={cardInfo.description}/>
                );
            })}
        </div>
    );
}

export default CardGrid