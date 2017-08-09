/**
 * Created by srideesh on 25/7/17.
 */
import React from 'react';
import WeekDay from './../WeekDay/WeekDay';
import './Week.css';

const Weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const Week = (props) =>{
    return (
        <ul className="weekWrapper">{Weekdays.map(day =><WeekDay key={day} weekday={day}/>)}</ul>
    );
}

export default Week;