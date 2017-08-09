/**
 * Created by srideesh on 28/7/17.
 */
import React, {Component} from 'react';
import './PopUp.css';
import Button from './../Button/Button';


class PopUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        };
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e) {
        this.setState({inputValue: e.target.value});
    };

    render() {
        return (
            <div className="popUpContainer">
                <ul className="popUpUl">
                    <li className="popUpLi fleft">{this.props.selectedDate+"/"+this.props.month+"/"+this.props.year}</li>
                    <li className="popUpLi fleft"><span>Add Note:</span>
                        <input onChange={this.inputChange}/></li>
                    <li className="popUpLi fright">
                        <Button name="save"
                                onClickFunction={() => this.props.onSaveAppointment(this.state.inputValue)}/></li>
                </ul>
            </div>
        );
    }
}

export default PopUp;