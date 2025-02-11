import React, { useState } from 'react';
import ReservationForm from '../components/ReservationForm';
import ReservationTable from '../components/ReservationTable';

const HomePage = () => {
  const [reservations, setReservations] = useState([]);
  const [availableSeats, setAvailableSeats] = useState(50); // Total capacity

  const handleReserve = (reservation) => {
    const checkInTime = new Date();
    setReservations([
      ...reservations,
      { ...reservation, checkInTime, checkedOut: false },
    ]);
    setAvailableSeats(availableSeats - reservation.guestCount);
  };

  const handleCheckout = (index) => {
    const updatedReservations = [...reservations];
    updatedReservations[index].checkedOut = true;
    updatedReservations[index].checkOutTime = new Date();
    setReservations(updatedReservations);
  };

  const handleDelete = (index) => {
    const deletedReservation = reservations[index];
    const updatedReservations = reservations.filter((_, i) => i !== index);
    setReservations(updatedReservations);
    if (!deletedReservation.checkedOut) {
      setAvailableSeats(availableSeats + deletedReservation.guestCount);
    }
  };

  return (
    <div>
      <h1>Restaurant Reservation System</h1>
      <p>Seats Left: {availableSeats}</p>
      <ReservationForm onReserve={handleReserve} availableSeats={availableSeats} />
      <ReservationTable
        reservations={reservations}
        onCheckout={handleCheckout}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default HomePage;