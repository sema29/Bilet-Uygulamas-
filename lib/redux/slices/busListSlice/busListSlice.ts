import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const initialState: BusListSliceState = {
  buses:
  [ 
    { 
      id: -1,
      departure: "Ankara",
      arrival: "Istanbul",
      date: "2024-01-22",
      price: 60,
      seatList: [
        {
          id: 1,
          status: "male"
        }
      ]
    }
  ],
  selectedBus: { 
    id: -1,
    departure: "Ankara",
    arrival: "Istanbul",
    date: "2024-01-22",
    price: 60,
    seatList: [
      {
        id: 1,
        status: "male"
      }
    ]
  }
};


export const busListSlice = createSlice({
  name: "buslist",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state,action:PayloadAction<Bus>) => {
      
      if(state.buses[0].id == -1) state.buses.pop();

      const bus = action.payload;
      state.buses.push(bus)    
    },
    select: (state ,action:PayloadAction<Bus>) => {
      const bus = action.payload;
      state.selectedBus = bus;
    }
  },

});


type Seat = {
  id: number,
  status: string
}

type Bus = {
  id: number,
  departure: string,
  arrival: string,
  date: string,
  price: number,
  seatList: Array<Seat>
}



export interface BusListSliceState {
  buses: Array<Bus>
  selectedBus: Bus
};


