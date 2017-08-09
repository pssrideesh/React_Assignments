/**
 * Created by srideesh on 27/7/17.
 */
import React from 'react';
import './Button.css';


class Button extends React.Component {
    handleClick= ()=>{
        this.props.onClickFunction()
    };
    render() {
        return (
            <button className="buttonComponent" onClick={this.handleClick}>{this.props.name}</button>
        );
    }
}

export default Button;