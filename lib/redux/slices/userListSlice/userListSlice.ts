import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: UserListSliceState = {
  users: [
    {
      name: "sema",
      email: "sema@gmail.com",
      number: "5359471666",
      password: "123456",
      gender: true,
      bday: new Date("2000-07-12"),
    },
  ],
  loggedUser: {
    name: "sema",
    email: "sema@gmail.com",
    number: "5359471666",
    password: "123456",
    gender: true,
    bday: new Date("2000-07-12"),
  },
};

export const userListSlice = createSlice({
  name: "userlist",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.users.push(user);
    },
    login: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.loggedUser = user;
    },
  },
});

type User = {
  name: string;
  email: string;
  number: string;
  password: string;
  gender: boolean;
  bday: Date;
};

export interface UserListSliceState {
  users: Array<User>;
  loggedUser: User;
}
