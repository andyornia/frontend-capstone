import React from 'react';

import BookingForm from './BookingForm'
import Main from './Main'

const BookingPage = () => {
    return (
    <Main>
      <h1 id="bookingFormHeadline">Make a Reservation</h1>
      <BookingForm />
    </Main>
    );
};

export default BookingPage;