import React from "react";

class Counter extends React.Component {
 constructor(props) {
  super(props);
  this.state = { count:0 }; 
 }

 componentDidMount() {
  this.setState({
   count:this.state.count+1
  });
 }

 updateCount = () => {
  this.setState({
   count:this.state.count+1
  });
 }

 render() {
  return (
   <div>
        <h1>Hello</h1>
        <button onClick={this.updateCount}>Click me</button>
        <h1>
            I've been clicked <span style={{color: "red"}}>{this.state.count}</span> times!
        </h1>
   </div>
  );
 }
}

 
export default Counter;