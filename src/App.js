import React from 'react';


//const foodILike = [{}]
// 객제 배열

class App extends React.Component{
  state = {
    isLoading : true,




  };

componentDidMount(){
  setTimeout(() => {

    this.setState({ isLoading : false});
    
  },6000);

}


//여기는 return 이 없다.
render(){
  const { isLoading} = this.state;
  return (
  <div>  
      { isLoading ? "Loading..." : "We are ready" }
    </div>)
}
}
export default App;
