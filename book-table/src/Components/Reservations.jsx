import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm';

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_AVAILABLE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

const initializeTimes = () => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
};

const updateTimes = (dispatch) => (newTimes) => {
  dispatch({ type: 'UPDATE_AVAILABLE_TIMES', payload: newTimes });
};

function Reservations() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, dispatchAvailableTimes] = useReducer(availableTimesReducer, null, initializeTimes);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Reservation made:', { date, time, guests, occasion });
  };

  const updateAvailableTimes = updateTimes(dispatchAvailableTimes);

  const fetchAvailableTimes = (date) => {
    // For now, just update the available times to some default values
    updateAvailableTimes([
      '16:00',
      '17:00',
      '18:00',
    ]);
  };

  return (
    <div>
      <BookingForm
        date={date}
        setDate={(date) => {
          setDate(date);
          fetchAvailableTimes(date);
        }}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        updateAvailableTimes={updateAvailableTimes}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Reservations;