/**
 * Created by srideesh on 1/8/17.
 */
import React from 'react';
import './List.css'


const List = (props) => {

    return (
        <ul className="listUl">
            <li style={{listStyle:'none'}}>Appointments:</li>
            {Object.keys(props.appointments).map((key) => {
                    return <li key={key}>
                        <span className="listDateLi">
                            {key}
                        </span>
                        <ul>
                            {props.appointments[key].map((note,index) => {
                                return <li key ={index} className="listNoteli">{note}</li>
                                }
                            )}
                        </ul>
                    </li>;
                }
            )}
        </ul>
    );
};

export default List;