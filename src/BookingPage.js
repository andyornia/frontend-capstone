import React from 'react';

import BookingForm from './BookingForm'
import Main from './Main'

const BookingPage = ({availableTimes, availableTimesDispatch, loading}) => {
    return (
    <Main>
      <h1 id="bookingFormHeadline">Make a Reservation</h1>
      <BookingForm 
        availableTimes={availableTimes}
        availableTimesDispatch={availableTimesDispatch}
        loading={loading}
      />
    </Main>
    );
};

export default BookingPage;