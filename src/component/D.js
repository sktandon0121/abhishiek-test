import React, {Component} from "react";


class D extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>Component D

                <input type="number" value={this.props.a}/>
            </div>
        )
    }

}
export default D;