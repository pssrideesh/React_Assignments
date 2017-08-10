/**
 * Created by srideesh on 4/8/17.
 */
import React,{Component} from 'react';
import './TextArea.css';
import DateField from './../DateField/DateField';
class TextArea extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            note: ""
        };
        this.textAreaChange = this.textAreaChange.bind(this);
    }
    textAreaChange(e){
        this.setState({note:e.target.value});
    };

    render(){
        return(
            <div className="TextArea-wrapper">
                <DateField createdDate={this.state.date}/>
                <textarea className="TextArea" onChange={this.textAreaChange}/>
            </div>
        );
    }
}

export default TextArea;