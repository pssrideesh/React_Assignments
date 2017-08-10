/**
 * Created by srideesh on 4/8/17.
 */
import React,{Component} from 'react';
import './Header.css';
import Button from './../Button/Button';
import Search from './../Search/Search';
import List from "../List/List";

class Header extends Component{
    constructor(props){
        super(props);
        this.state= {
            list: []
        };
        this.addNote =this.addNote.bind(this);
    }

    addNote() {
        let list =this.state.list
    }

    render() {
        return (
            <div className="Header-wrapper">
                <Button name='Add' onClickFunction={this.addNote}/>
                <Button name='delete'/>
                <Search/>
            </div>
        );
    }
}

export default Header;