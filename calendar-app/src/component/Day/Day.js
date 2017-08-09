/**
 * Created by srideesh on 25/7/17.
 */

import React from 'react';
import classNames from 'classnames';
import './Day.css'

const Day = (props) => (
    <li className={classNames({'activeDate': props.selectedDate === props.day}, {'currentDate': new Date().getDate() === props.day}, 'inactiveDate')}
        onClick={() => props.onClickFunction(props.day)}>{props.day}</li>
);
export default Day;