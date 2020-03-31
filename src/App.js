import React from 'react';


function Food(props){

  return  <h2>I Love {props.name}</h2>

}

//const foodILike = [{}]
 // 객제 배열

function App() {
  return (
    <div className="App">
      Hello!
      <Food name="kimchi"/>
      <Food name="떡볶이"/>
      <Food name="순대"/>
      <Food name="감자탕"/>
 
    </div>
  );
}

export default App;
