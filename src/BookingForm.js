import React, { useState, useEffect, useCallback } from 'react';
import { fetchAPI, submitAPI } from './mockAPI/myAPI';

const BookingForm = ({ availableTimes, availableTimesDispatch, loading, initializeTimes, updateTimes }) => {
      
    // Get today's date
    const today = new Date();
    
    // Get year, month, and day
    const year = today.getFullYear();
    // January is 0, so we add 1 to get the current month
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    // Format the date as 'YYYY-MM-DD'
    const formattedDate = `${year}-${month}-${day}`;

    const [menuOptions, setMenuOptions] = useState([]);
    const [firstTime, setFirstTime] = useState(0);

    const [formData, setFormData] = useState({
        reservationDate: formattedDate,
        reservationTime: firstTime,
        guests: '2',
        occasion: 'Birthday'
    });
    
    
    useEffect(() => {
        
        let options = [];
        
        console.log('availableTimes effect running');
        if (typeof availableTimes === 'object' && Object.keys(availableTimes).length !== 0) {
            const timeKeys = Object.keys(availableTimes);
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
        } else {
            options.push(<option key={11}>{"11:00"}</option>);
        }   
        
        setMenuOptions(options);
        
    }, [availableTimes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(availableTimes);
        console.log(formData);
        availableTimesDispatch({ type: 'update', payload: { [formData.reservationTime.split(':')[0]]: false } });
        console.log(availableTimes);
    }
    
    console.log('loading', loading);
    
    return (
        <form id="reservationForm" onSubmit={handleSubmit}>
           <label htmlFor="reservationDate">Choose date</label>
           <input type="date" id="reservationDate" name="reservationDate" value={formData.reservationDate} onChange={handleChange} />
           <label htmlFor="reservationTime">Choose time</label>
           <span id="loadingFormTimes" className={loading ? "": "warninghidden"} >searching for available times...</span>
           <select className={!loading ? "": "timeshidden"} data-testid="reservationTime" id="reservationTime" name="reservationTime" value={formData.reservationTime} onChange={handleChange}>
              {menuOptions}
           </select>
           <label htmlFor="guests">Number of guests</label>
           <input type="number" placeholder="2" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleChange} />
           <label htmlFor="occasion">Occasion</label>
           <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} >
              <option>Birthday</option>
              <option>Anniversary</option>
           </select>
           <button type="submit" value="Make Your reservation" disabled={loading}>Reserve</button>
        </form>
    );
};

export default BookingForm;