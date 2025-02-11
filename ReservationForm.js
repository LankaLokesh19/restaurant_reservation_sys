import React, { useState } from 'react';

const ReservationForm = ({ onReserve, availableSeats }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guestCount > availableSeats) {
      alert('Not enough seats available!');
      return;
    }
    if (!reservationDate || !reservationTime) {
      alert('Please select a date and time for your reservation.');
      return;
    }
    const reservationDateTime = `${reservationDate}T${reservationTime}`;
    onReserve({ name, phone, guestCount, reservationDateTime });
    setName('');
    setPhone('');
    setGuestCount(1);
    setReservationDate('');
    setReservationTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="guestCount">Number of Seats:</label>
        <input
          type="number"
          id="guestCount"
          placeholder="Enter number of seats"
          value={guestCount}
          onChange={(e) => setGuestCount(Number(e.target.value))}
          min="1"
          required
        />
      </div>
      <div>
        <label htmlFor="reservationDate">Reservation Date:</label>
        <input
          type="date"
          id="reservationDate"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="reservationTime">Reservation Time:</label>
        <input
          type="time"
          id="reservationTime"
          value={reservationTime}
          onChange={(e) => setReservationTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;