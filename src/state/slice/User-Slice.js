import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  loading: false,
  user: [],
  error: null,
};

export const fetchAdminUser = createAsyncThunk(
  "user/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const adminUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchAdminUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, activateUser, blacklistUser } =
  adminUserSlice.actions;

export const selectUser = (state) => state.user;

export default adminUserSlice.reducer;
