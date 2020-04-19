import React from 'react';


//const foodILike = [{}]
// 객제 배열

class App extends React.Component{

  state={
    count : 0


  };

  add = () => {
    this.setState(current => ({ count : current.count + 1}));
  };
  minus = () => {
    this.setState( current => ({ count : current.count - 1}));
  }; 
// react에서 외부의 상태에 의존 하지 않는 가장 좋은 방법


//여기는 return 이 없다.
render(){
  return (
  <div>  
    The count is {this.state.count}
    <button onClick={this.add}>Add</button>
    <button onClick = {this.minus}>Minus</button>
    
    </div>)
}
}

export default App;
