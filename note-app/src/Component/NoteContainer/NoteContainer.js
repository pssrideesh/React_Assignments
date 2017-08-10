/**
 * Created by srideesh on 4/8/17.
 */
import React,{Component} from 'react';
import './NoteContainer.css';
import Header from './../Header/Header';
import Content from './../Content/Content';

class NoteContainer extends Component{
    render(){
        return(
            <div className="NoteContainer">
                <Header/>
                <Content/>
            </div>

        );
    }
}

export default NoteContainer;
