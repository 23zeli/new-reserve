// import React from 'react'
import { useState } from 'react';

export default function BookingForm({ availableTimes = [], updateTimes }) {
    const [date, setDate] = useState ("")
    const [number, setNumber] = useState ("")
    const [time, setTime] = useState (availableTimes.length > 0 ? availableTimes[0] : '')
    const [occasion, setOccasion] = useState ("")

    // useEffect(() => {
    //   if (availableTimes.length > 0) {
    //     setTime(availableTimes[0]);
    //   }
    // }, [availableTimes]);

    const handleDateChange = (e) => {
      setDate(e.target.value);
      updateTimes(e.target.value);
    };

    const handleSubmit= (e) =>{
        e.preventDefault();
        setDate("");
        setNumber("");
        setTime("17:00");
        setOccasion("");
    }
  return (
    <div>
        <fieldset>
            <form
                style={{display: "grid",
                    maxWidth: "200px",
                    gap: "20px",
                    margin: "auto",
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id='res-date'
                    value={date}
                    // onChange={(e) => setDate(e.target.value)}
                    onChange={handleDateChange}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                  id="res-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                      {availableTime}
                    </option>
                  ))}
                </select>
                <label id='guests' htmlFor="guests">Number of guests</label>
                <input type='number' placeholder='1' min={1} max={10} id='guests-input' value={number} onChange={(e) => setNumber(e.target.value)}></input>
                <label htmlFor="occasion">Occasion</label>
                <select value={occasion} onChange={(e) => setOccasion(e.target.value)} >
                    <option></option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                </select>
                <input id='submit' role='button' type='submit' value={"Make your reservation"}/>
            </form>
        </fieldset>
    </div>
  )
}
