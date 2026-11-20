

function MyBookings() {
  return (
    <div>
      <h1>Welcome to My Bookings</h1>
      <p>Manage your photography bookings here.</p>
      <table>
        <thead>
          <tr>
            <th>Booking</th>
            <th>Customer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wedding Photography</td>
            <td>Diniru</td>
            <td>12 June 2026</td>
          </tr>
          <tr>
            <td>Portrait Session</td>
            <td>Rahul</td>
            <td>20 June 2026</td>
          </tr>
          <tr>
            <td>Event Coverage</td>
            <td>Shehan</td>
            <td>5 July 2026</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}

export default MyBookings;