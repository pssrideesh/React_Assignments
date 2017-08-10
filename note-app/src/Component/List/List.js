/**
 * Created by srideesh on 4/8/17.
 */

import React,{Component} from 'react';
import './List.css';

class List extends Component{

    render(){
        return(
            <li className="List-item">
                <span>{this.props.title}</span>
                <span>{this.props.createdDate}</span>
            </li>

        );
    }
}

export default List;