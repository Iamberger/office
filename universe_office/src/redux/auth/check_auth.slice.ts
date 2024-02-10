import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CheckAuthILocalState {
  fetch_mini_profile_state: "none" | "loading" | "success" | "failed";
  mini_profile: any;
}


const initialState: CheckAuthILocalState = {
    fetch_mini_profile_state: "none",
    mini_profile: {},
};

export const CheckAuthSlice = createSlice({
  name: "CheckAuth",
  initialState,
  reducers: {
    resetAllCheckAuthSliceStates: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const { resetAllCheckAuthSliceStates } = CheckAuthSlice.actions;
