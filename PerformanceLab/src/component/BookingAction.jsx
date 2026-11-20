import { useState, useCallback } from "react";

function BookingAction() {
  const [bookings, setBookings] = useState(0);

  const addBooking = useCallback(() => {
    setBookings(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>LensCraft Booking Actions</h2>

      <p>Total Bookings: {bookings}</p>

      <button onClick={addBooking}>
        Add Booking
      </button>
    </div>
  );
}

export default BookingAction;