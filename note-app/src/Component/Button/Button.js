/**
 * Created by srideesh on 4/8/17.
 */

import React,{Component} from 'react';
import './Button.css';

class Button extends Component{
    handleClick =()=>{
      this.props.onClickFunction();
    };
    render() {
        return (
            <button className="Button" onClick={this.handleClick}>{this.props.name}</button>
        );
    }
}

export default Button;