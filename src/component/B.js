import React,{Component} from 'react';

class B extends  Component{
    constructor(props){
        super(props)
    }
  render(){
        return(

            <div>Component B
            <input type ="number" value={this.props.a}/>
            </div>

        )
  }
}
export default B
