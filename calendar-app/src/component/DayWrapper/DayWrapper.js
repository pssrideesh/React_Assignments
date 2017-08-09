/**
 * Created by srideesh on 26/7/17.
 */

import React, {Component} from 'react';
import Day from './../Day/Day';
import "./DayWrapper.css";
import classNames from 'classnames';

class DayWrapper extends Component {

    render() {
        let days = [];
        for (let i = 1; i <= this.props.days; i++) {
            days.push(<Day key={i}
                           day={i}
                           selectedDate={this.props.selectedDate}
                           active={this.props.date === i}
                           onClickFunction={this.props.onClickOfDay}>
            </Day>);

        }
        return (
            <ul className={classNames("clearfix", "daysWrapper")}>{days}</ul>
        );
    }
}

export default DayWrapper;