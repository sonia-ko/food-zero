import { createSlice } from "@reduxjs/toolkit";

interface Reservation {
  date: string;
  time: string;
  numOfPersons: string;
  additionalInfo?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };
}

interface ReservationsState {
  reservations: Reservation[];
  numberOfReservations: number;
}

const initialState: ReservationsState = {
  reservations: [
    {
      date: new Date().toISOString(),
      time: "09:00 AM",
      numOfPersons: "1 person",
      additionalInfo: {
        firstName: "John",
        lastName: "Snow",
        email: "john.snow@gmail.com",
        phone: "+888 888 888",
      },
    },
    {
      date: new Date().toISOString(),
      time: "02:00 AM",
      numOfPersons: "1 person",
    },
  ],
  numberOfReservations: 0,
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    setReservations(state, action) {
      state.reservations = [...state.reservations, action.payload];
      state.numberOfReservations = state.numberOfReservations++;
    },
  },
});

export const { setReservations } = reservationsSlice.actions;

export default reservationsSlice.reducer;
