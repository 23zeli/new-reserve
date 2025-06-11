import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Specials from './Specials'
// import Homepage from './Homepage'
// import BookingPage from './BookingPage';
import BookingForm from './BookingForm';
import React, { useReducer } from 'react';

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return action.payload;
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

const initializeTimes = (date = new Date()) => {
  const dayOfWeek = new Date(date).getDay();
  const weekend = [0, 6]; // 0 = Sunday, 6 = Saturday
  const newAvailableTimes = weekend.includes(dayOfWeek)
    ? ['17:00', '18:00', '19:00', '20:00']
    : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  return {
    type: 'INITIALIZE_TIMES',
    payload: newAvailableTimes,
  };
};

const updateTimes = (date) => {
  const dayOfWeek = new Date(date).getDay();
  const weekend = [0, 6]; // 0 = Sunday, 6 = Saturday
  const newAvailableTimes = weekend.includes(dayOfWeek)
    ? ['17:00', '18:00', '19:00', '20:00']
    : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  return {
    type: 'UPDATE_TIMES',
    payload: newAvailableTimes,
  };
};


function Main() {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  React.useEffect(() => {
    dispatch(initializeTimes());
  }, []);

  const handleUpdateTimes = (date) => {
    dispatch(updateTimes(date));
  };

  return (
    <Router>
        <Routes>
          {/* <Route path='/' element= {<Homepage />}/> */}
          {/* <Route path="/menu" element= {<Specials />} /> */}
          <Route path='/reservations' element= {<BookingForm availableTimes={availableTimes} updateTimes={handleUpdateTimes}/>} />
        </Routes>
    </Router>
  )
}

export default Main