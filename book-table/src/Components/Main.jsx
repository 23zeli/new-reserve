// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Specials from './Specials'
import Homepage from './Homepage'
// // import BookingPage from './BookingPage';
// import BookingForm from './BookingForm';
// import React, { useReducer } from 'react';

// const availableTimesReducer = (state, action) => {
//   switch (action.type) {
//     case 'INITIALIZE_TIMES':
//       return action.payload;
//     case 'UPDATE_TIMES':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const initializeTimes = (date = new Date()) => {
//   const dayOfWeek = new Date(date).getDay();
//   const weekend = [0, 6]; // 0 = Sunday, 6 = Saturday
//   const newAvailableTimes = weekend.includes(dayOfWeek)
//     ? ['17:00', '18:00', '19:00', '20:00']
//     : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//   return {
//     type: 'INITIALIZE_TIMES',
//     payload: newAvailableTimes,
//   };
// };

// const updateTimes = (date) => {
//   const dayOfWeek = new Date(date).getDay();
//   const weekend = [0, 6]; // 0 = Sunday, 6 = Saturday
//   const newAvailableTimes = weekend.includes(dayOfWeek)
//     ? ['17:00', '18:00', '19:00', '20:00']
//     : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//   return {
//     type: 'UPDATE_TIMES',
//     payload: newAvailableTimes,
//   };
// };


// function Main() {
//   const [availableTimes, dispatch] = useReducer(
//     availableTimesReducer,
//     [],
//     () => initializeTimes().payload
//   );

//   // React.useEffect(() => {
//   //   dispatch(initializeTimes());
//   //   },
//   //   [],
//   //   () => initializeTimes().payload
//   // );

//   const handleUpdateTimes = (date) => {
//     dispatch(updateTimes(date));
//   };

//   return (
//     <Router>
//         <Routes>
//           {/* <Route path='/' element= {<Homepage />}/> */}
//           {/* <Route path="/menu" element= {<Specials />} /> */}
//           <Route path='/reservations' element= {<BookingForm availableTimes={availableTimes} updateTimes={handleUpdateTimes}/>} />
//         </Routes>
//     </Router>
//   )
// }

// export default Main

// MT Fix

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingForm from './BookingForm';
import React, { useReducer, useState } from 'react';

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

function Main() {
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

    <Router>
      <Routes>
        <Route path='/' element= {<Homepage />}/>
        <Route path="/menu" element= {<Specials />} />
        <Route
          path="/reservations"
          element={
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
          }
        />
      </Routes>
    </Router>
  );
}

export default Main;