import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Card from './Card';
import Form from './Form';

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

function App() {
  return (
    <>
      <Banner mainColor="#323234" mainTextColor="white" mainTitle="Bienvenidos" description="Somos una comunidad" linkTo="https://google.com" linkDescription="Súmate a la aventura"/>
      <div className="cards-container">
        {cardsInfo.map((cardInfo) => {
          return(
            <Card image={cardInfo.image} title={cardInfo.title} description={cardInfo.description}/>
          );
        })}
      </div>
      <Form />
    </>
  );
}

export default App;
