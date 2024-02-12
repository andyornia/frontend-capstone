import React, { useState } from 'react';

const BookingForm = ({ availableTimes, initializeTimes, updateTimes }) => {
    
    // Get today's date
    const today = new Date();
    
    // Get year, month, and day
    const year = today.getFullYear();
    // January is 0, so we add 1 to get the current month
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    // Format the date as 'YYYY-MM-DD'
    const formattedDate = `${year}-${month}-${day}`;
    
    const [formData, setFormData] = useState({
        reservationDate: formattedDate,
        reservationTime: '17:00',
        guests: '2',
        occasion: 'Birthday'
    });


    const options = [];
    
    if (availableTimes) {
        const timeKeys = Object.keys(availableTimes);
        timeKeys.sort();
        
        timeKeys.forEach(key => {
         if (availableTimes[key]) {
          options.push(<option key={key}>{key}:00</option>);
         } else {
          options.push(<option key={key} class="unavailable">{key}:00</option>);
         }
        });
    } else {
        options.push(<option key={11}>{"11:00"}</option>);
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        updateTimes(formData.reservationTime.split(':')[0], false, formData.reservationDate);
    }
    
    return (
        <form id="reservationForm" style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
           <label htmlFor="reservationDate">Choose date</label>
           <input type="date" id="reservationDate" name="reservationDate" value={formData.reservationDate} onChange={handleChange} />
           <label htmlFor="reservationTime">Choose time</label>
           <select data-testid="reservationTime" id="reservationTime" name="reservationTime" value={formData.reservationTime} onChange={handleChange}>
              {options}
           </select>
           <label htmlFor="guests">Number of guests</label>
           <input type="number" placeholder="2" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleChange} />
           <label htmlFor="occasion">Occasion</label>
           <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} >
              <option>Birthday</option>
              <option>Anniversary</option>
           </select>
           <button type="submit" value="Make Your reservation">Reserve</button>
        </form>
    );
};

export default BookingForm;