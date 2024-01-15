/* Instruments */
import { userListSlice, busListSlice } from "./slices";

export const reducer = {
  userListSlice: userListSlice.reducer,
  busListSlice: busListSlice.reducer,
};
