import React,{Component} from  'react';

class A extends Component{
    constructor(props) {
        super(props)


    }

    render(){
        return(
            <div>
                component A
                <button onClick={this.props.handleInput} >ok</button>
            </div>
        )
    }
}
export default A
