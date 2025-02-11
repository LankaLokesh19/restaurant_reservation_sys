import React from 'react';

const ReservationTable = ({ reservations, onCheckout, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Guest Count</th>
          <th>Reservation Date & Time</th>
          <th>Check-In Time</th>
          <th>Checkout Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation, index) => (
          <tr key={index}>
            <td>{reservation.name}</td>
            <td>{reservation.phone}</td>
            <td>{reservation.guestCount}</td>
            <td>{new Date(reservation.reservationDateTime).toLocaleString()}</td>
            <td>{reservation.checkInTime.toLocaleString()}</td>
            <td>
              {reservation.checkedOut
                ? `Checked Out at ${reservation.checkOutTime.toLocaleString()}`
                : 'Not Checked Out'}
            </td>
            <td>
              {!reservation.checkedOut && (
                <button onClick={() => onCheckout(index)}>Checkout</button>
              )}
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReservationTable;