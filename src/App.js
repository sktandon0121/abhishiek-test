import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import A from './component/A';
import B from './component/B';


class App extends Component {
  constructor(props){
    super(props)
      this.state={
      value:6
      }

    }
  handleInput=(e)=>{
    e.preventDefault()
    this.setState({value:this.state.value+1})
  }

 render(){
   return (
       <div className="App">

         <A handleInput={this.handleInput}/>
         <B a={this.state.value}/>
       </div>
   );
 }
}

export default App;
