import React,{Component} from 'react';
import C  from './component/C';
import D from './component/D';
import './App.css';

class App1 extends Component{
    constructor(props){
        super(props)
        this.state={
            v:0
        }
    }
    handleInput=(e)=>{
        e.preventDefault()
        this.setState({v:this.state.v+1})
    }
    render(){
        return(
          <div className="App1">
              <C handleInput={this.handleInput}/>
              <D a={this.state.v}/>
          </div>
        )
    }
}

export default App1