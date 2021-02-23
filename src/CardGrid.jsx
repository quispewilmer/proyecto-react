import React from 'react';
import Card from './Card';

let cardsInfo = [
    {
      image: "https://www.todorock.com/wp-content/uploads/2019/05/Amy-Lee-evanescence.jpg",
      title: "Hola",
      description: "Primera descripción"
    },{
      image: "https://elintransigente.com/wp-content/uploads/2020/12/Evanescence.jpg",
      title: "Hola",
      description: "Primera descripción"
    },{
      image: "https://www.todorock.com/wp-content/uploads/2019/05/Amy-Lee-evanescence.jpg",
      title: "Hola",
      description: "Primera descripción"
    },{
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
                    <Card image={cardInfo.image} title={cardInfo.title} description={cardInfo.description}/>
                );
            })}
        </div>
    );
}

export default CardGrid