import React,{Component} from 'react';

class C extends Component {
    constructor(props){
        super(props)
    }

        render(){
            return(
                <div>Component C
                <button onClick={this.props.handleInput}>OK</button>
                </div>
            )
        }

}
export default C;