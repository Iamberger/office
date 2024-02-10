import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helpers/general_config.helper";

interface AuthILocalState {
  signin_state: "none" | "loading" | "success" | "failed";
  verify_state: "none" | "loading" | "success" | "failed";
  signout_state: "none" | "loading" | "success" | "failed";
  error: string | null;
  statusCode: string | null;
}

const initialState: AuthILocalState = {
  signin_state: "none",
  verify_state: "none",
  signout_state: "none",
  error: null,
  statusCode: null,
};

export const doSignin = createAsyncThunk(
  "Auth/doSignin",
  async (
    {
      username,
      password,
    }: {
      username: string;
      password: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(`${BASE_URL}/backoffice/auth/signin`, {
        username: username,
        password: password,
      });

      if (response && response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(
          new Error("Could not complete signin, due to unknown error")
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const doVerify = createAsyncThunk(
  "Auth/doVerify",
  async (
    {
      code,
      username,
    }: {
      username: string;
      code: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/backoffice/auth/verify`,
        {
          username: username,
          code: code,
        },
        {
          withCredentials: true,
        }
      );

      if (response) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(
          new Error("Could not complete verify, due to unknown error")
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const doSignout = createAsyncThunk(
  "Auth/logout",
  async (_, thunkAPI) => {
    try {
      const url = `${BASE_URL}/backoffice/auth/signout`;
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response && response.status === 200) {
        window.location.href = "/login";
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(
          new Error("Could not complete signout, due to unknown error")
        );
      }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    resetAllAuthSliceStates: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(doSignin.pending, (state, action) => {
      state.signin_state = "loading";
    });
    builder.addCase(doSignin.fulfilled, (state, action) => {
      state.signin_state = "success";
    });
    builder.addCase(doSignin.rejected, (state, action) => {
      state.signin_state = "failed";
      state.error = action.error.message || null;
      state.statusCode = action.error.code || null;
    });
    builder.addCase(doVerify.pending, (state, action) => {
      state.verify_state = "loading";
    });
    builder.addCase(doVerify.fulfilled, (state, action) => {
      state.verify_state = "success";
    });
    builder.addCase(doVerify.rejected, (state, action) => {
      state.verify_state = "failed";
      state.error = action.error.message || null;
      state.statusCode = action.error.code || null;
    });

    builder.addCase(doSignout.pending, (state, action) => {
      state.signout_state = "loading";
    });
    builder.addCase(doSignout.fulfilled, (state, action) => {
      state.signout_state = "success";
    });
    builder.addCase(doSignout.rejected, (state, action) => {
      state.signout_state = "failed";
      state.error = action.error.message || null;
      state.statusCode = action.error.code || null;
    });
  },
});

export const { resetAllAuthSliceStates } = AuthSlice.actions;
