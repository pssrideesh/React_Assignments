/**
 * Created by srideesh on 25/7/17.
 */
import React, {Component} from 'react';
import Week from './../Week/Week';
import DayWrapper from './../DayWrapper/DayWrapper';
import Button from './../Button/Button';
import Popup from '../PopUp/PopUp';
import  List from './../List/List';
import "./Month.css"

const Months = [{month: "Jan", days: 31},
    {month: "Feb", days: 29},
    {month: "March", days: 31},
    {month: "April", days: 30},
    {month: "May", days: 31},
    {month: "Jun", days: 30},
    {month: "Jul", days: 31},
    {month: "Aug", days: 31},
    {month: "Sep", days: 30},
    {month: "Oct", days: 31},
    {month: "Nov", days: 30},
    {month: "Dec", days: 31}];


let today = new Date();
const currentDate = today.getDate();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

class Month extends Component {


    constructor(props) {
        super(props);
        this.state = {
            month: currentMonth,
            year:currentYear,
            max: 11,
            min: 0,
            date: currentDate,
            showPopup: false,
            selectedDate: currentDate,
            appointments: {}
        };
        this.onClickOfDay = this.onClickOfDay.bind(this);
        this.openPopUp = this.openPopUp.bind(this);
        this.nextClick = this.nextClick.bind(this);
        this.onSave = this.onSave.bind(this);

    }

    prevClick = () => {
        this.setState((prevState) => {
            if (prevState.month === prevState.min)
                return {month: prevState.max};
            else
                return {month: prevState.month - 1};
        });
    }

    nextClick() {
        this.setState((prevState) => {
            if (prevState.month === prevState.max)
                return {month: prevState.min};
            else
                return {month: prevState.month + 1};
        });
    }

    openPopUp() {
        this.setState((prevState) => {
            if (prevState.showPopup)
                return {showPopup: false};

            return {showPopup: true};
        })
    }

    onClickOfDay(day) {
        this.setState({selectedDate: day})
    }

    onSave(appointmentNotes) {
        let appointments = this.state.appointments;
        let selectedDate = this.state.selectedDate+"/"+(this.state.month+1)+"/"+currentYear;
        if(appointments[selectedDate] && appointments[selectedDate].length > 0)
            appointments[selectedDate].push(appointmentNotes);
        else
            appointments[selectedDate] = [appointmentNotes];
        this.setState({
            appointments: appointments,
            showPopup: false
        });
        console.log(this.state.appointments);
    }

    render() {

        const {selectedDate} = this.state;

        return (
            <div className="container clearfix">
                <div className="monthWrapper">
                    <div className="prevMonth whiteTriangle" onClick={this.prevClick}>
                        <span className="prevTriangle">
                        </span>
                    </div>
                    <span className="monthLabel">{Months[this.state.month].month}</span><span className="monthLabel"> 2017</span>
                    <div className="nextMonth whiteTriangle" onClick={this.nextClick}>
                        <span className="nextTriangle">
                        </span>
                    </div>
                </div>
                <Week/>
                <DayWrapper days={Months[this.state.month].days}
                            selectedDate={selectedDate}
                            onClickOfDay={this.onClickOfDay}
                            date={this.state.date}
                />
                <Button name="Make Appointment" onClickFunction={this.openPopUp}/>
                {this.state.showPopup && <Popup selectedDate ={this.state.selectedDate} month ={this.state.month+1} year={currentYear} onSaveAppointment={this.onSave}/>}
                <List appointments={this.state.appointments}/>
            </div>

        );
    }
}

export default Month;