import BookingForm from './BookingForm'

function BookingPage() {
  return (
    <div id='reservations'>
      <h3
        style={{padding: "20px"}}
      >
        Make your Reservation
      </h3>
      <BookingForm />
    </div>
  )
}

export default BookingPage