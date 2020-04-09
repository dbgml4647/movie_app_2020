import React from 'react';
import PropTypes from "prop-types";


//const foodILike = [{}]
// 객제 배열

function Food({ name,picture,rating}) {
  return <div>
    <h2>I Love {name}</h2>
    <h4>{ rating}/5</h4>
    <img src = {picture} alt="main dish"/>

  </div>
}


Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired


};


const foodILike = [
  {
    id :1,
    name: "떡볶이",
    image: "http://www.jawsfood.com/uploads/product/20180605409363.png",
    rating:5


  },
  {
    id : 2, 
    name: "순대",
    image: "https://www.jbplaza.com/data/shop/item/1453801573_l1",
    rating :4.8

  },
  {
    id : 3,
    name: "감자탕",
    image: "http://www.businesskorea.co.kr/news/photo/201905/31575_43222_232.jpg",
    rating : 4.7
  }
];


function App() {
  return (
    <div className="App">
      
      {foodILike.map(dish =>  <Food key = {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating}/>)}


    </div>
  );
}

export default App;
