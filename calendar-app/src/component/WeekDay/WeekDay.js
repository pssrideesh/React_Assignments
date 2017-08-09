/**
 * Created by srideesh on 26/7/17.
 */
import React from 'react';
import './WeekDay.css';
const WeekDay = (props)=>{
    return(
        <li className="weekDayLi">{props.weekday}</li>
    );
}

export default WeekDay;