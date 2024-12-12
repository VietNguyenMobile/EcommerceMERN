import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

export interface UserState {
  name: number;
  email: string;
  access_token: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  access_token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      console.log("userSlice updateUser action : ", action);
      const { name, email, access_token } = action.payload;
      state.name = name;
      state.email = email;
      state.access_token = access_token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
