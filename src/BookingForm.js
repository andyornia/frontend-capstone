import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { submitAPI, fetchAPI } from './mockAPI/myAPI';
import { todaysDate } from './mockAPI/todaysDate';

const BookingForm = ({ availableTimes, availableTimesDispatch, loading, initializeTimes, updateTimes, loadData, submitForm }) => {
     
    const navigate = useNavigate();
    
    // Format the date as 'YYYY-MM-DD'
    const formattedDate = todaysDate();

    const [menuOptions, setMenuOptions] = useState([]);
    const [firstTime, setFirstTime] = useState(0);
    const [noTimes, setNoTimes] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [formInvalid, setFormInvalid] = useState(false);
    const [guestsInvalid, setGuestsInvalid] = useState(false);
    const [dateInvalid, setDateInvalid] = useState(false);
    
    const [formData, setFormData] = useState({
        reservationDate: formattedDate,
        reservationTime: firstTime,
        guests: '2',
        occasion: 'None'
    });
    
    const [formDateValue, setFormDateValue] = useState({formattedDate});
    
    
    useEffect(() => {
        let options = [];
        
        if (typeof availableTimes === 'object' && Object.keys(availableTimes).length !== 0) {
            const trueKeys = Object.entries(availableTimes)
              .filter(([key, value]) => value === true)
              .map(([key, value]) => key)
              .sort()
            const smallestKey = trueKeys.length > 0 ? trueKeys[0] : null;
            
            setFirstTime(smallestKey);
            setFormData(currentFormData =>{ return {...currentFormData, reservationTime: smallestKey + ':00' }});
        }
        
        if (typeof availableTimes === 'object' && Object.keys(availableTimes).length !== 0) {
            const timeKeys = Object.keys(availableTimes);
            timeKeys.sort();
            timeKeys.forEach(key => {
                options.push(<option key={key} disabled={!availableTimes[key]} >{key}:00</option>);
            });
            
            let allFalse = true;
            for (const key in availableTimes) {
              if (availableTimes[key] === true) {
                allFalse = false;
                break;
              }
            }
            setNoTimes(allFalse);

        } else {
            options.push(<option key={11}>{"11:00"}</option>);
        }   
        
        setMenuOptions(options);
        
    }, [availableTimes]);


    useEffect(() => {
        loadData();
        fetchAPI(formDateValue)
        .then(data => {
            updateTimes(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, [formDateValue, updateTimes, loadData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if ((name === "guests") && ((value < 1) || (value > 10))) {
            setFormInvalid(true);
            setGuestsInvalid(true);
        } else if ((name === "guests") && ((value > 1) && (value <= 10))) {
            setFormInvalid(false);
            setGuestsInvalid(false);
        }
    }
    
    const handleInputBlur = (e) => {
        const {target} = e;
        const { name, value } = target;
        let guests = formData.guests;
        if (name === "guests") {
            if ((guests < 1) || (guests > 10)) {
                setFormInvalid(true);
                setGuestsInvalid(true);
            } else {
                setFormInvalid(false);
                setGuestsInvalid(false);
            }
        }
        
        if (name === "reservationDate") {
            const today = new Date(todaysDate());
            const reservation = new Date(value);
            let todayfuture= new Date(today);
            todayfuture.setMonth(todayfuture.getMonth() + 3);
            
            if (reservation < today || reservation > todayfuture) {
                setDateInvalid(true);
                setFormInvalid(true);
            } else {
                setDateInvalid(false);
                setFormInvalid(false);
            }
        }
        
    };    
    
    const handleDateChange = (e) => {
        const {name, value} = e.target;
        setFormDateValue(value);
        setFormData({ ...formData, [name]: value });
        
        const today = new Date(todaysDate());
        const reservation = new Date(value);
        let todayfuture= new Date(today);
        todayfuture.setMonth(todayfuture.getMonth() + 3);
        
        if (reservation < today || reservation > todayfuture) {
            setDateInvalid(true);
            setFormInvalid(true);
        } else {
            setDateInvalid(false);
            setFormInvalid(false);
        }
        
        
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        availableTimesDispatch({ type: 'update', payload: { [formData.reservationTime.split(':')[0]]: false } });
        if (submitForm(formData, availableTimes)) {
            setFormSuccess(true);
        }
    }
    
    useEffect(() => {
        if (formSuccess) {
            navigate("/confirmation");
        }
    }, [formSuccess, navigate]);
    
    let maxReservationDate = new Date();
    maxReservationDate.setMonth(maxReservationDate.getMonth() + 3);
    maxReservationDate.setDate(maxReservationDate.getDate() - 1); // Subtract one day
    let maxYear = maxReservationDate.getFullYear();
    let maxMonth = String(maxReservationDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based index
    let maxDay = String(maxReservationDate.getDate()).padStart(2, '0');
    maxReservationDate = maxMonth + '-' + maxDay + '-' + maxYear;
    
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based index
    let todayDay = String(today.getDate()).padStart(2, '0');
    today = todayMonth + '-' + todayDay + '-' + todayYear;


    return (
        <form id="reservationForm" onSubmit={handleSubmit}>
           <label htmlFor="reservationDate">Choose date</label>
           <span id="dateWarning" data-testid="dateWarning" className={dateInvalid ? "warning" : "hidden warning" } >*can only reserve from {today} to {maxReservationDate}</span>
           <input type="date" id="reservationDate" name="reservationDate" data-testid="reservationDate" value={formData.reservationDate} onChange={handleDateChange} onBlur={handleInputBlur} />
           <label htmlFor="reservationTime">Choose time</label>
           <span id="loadingFormTimes" className={loading ? "": "warninghidden"} >searching for available times...</span>
           <span id="noAvailableTimes" className={!noTimes ? "availabletimeshidden": ""} >no times available</span>
           <select className={`${loading ? "timeshidden" : ""} ${noTimes ? "availabletimeshidden" : ""}`} data-testid="reservationTime" id="reservationTime" name="reservationTime" value={formData.reservationTime} onChange={handleChange}>
              {menuOptions}
           </select>
           <label htmlFor="guests">Number of guests</label>
           <span id="guestsWarning" data-testid="guestWarning" className={guestsInvalid ? "warning" : "hidden warning" } >*min. 2 guests, max. 10 guests</span>
           <input type="number" placeholder="2" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleChange} onBlur={handleInputBlur} />
           <label htmlFor="occasion">Occasion</label>
           <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} >
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
           </select>
           <button aria-label="On Click" className={(loading || noTimes || formInvalid) ? "disablebutton": ""} type="submit" value="Make Your reservation" disabled={(loading || noTimes || formInvalid)} >Reserve</button>
        </form>
    );
};

export default BookingForm;