/**
 * Created by srideesh on 4/8/17.
 */
import React,{ Component }from 'react';
import List from './../List/List';
import TextArea from './../TextArea/TextArea';

import './Content.css';

class Content extends Component{
    render() {
        return (
            <div className="Content-container">
                <ul className="Content-ul">

                </ul>
                <TextArea/>
            </div>
        );
    }
}

export default Content;