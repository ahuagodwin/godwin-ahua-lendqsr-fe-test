import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  analytics: null,
  error: null,
};

export const fetchAdminAnalytics = createAsyncThunk(
  "analytics/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/admin/analytics");
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const adminAnalyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.analytics = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.analytics = null;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminAnalytics.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        state.analytics = action.payload;
        state.error = null;
      })
      .addCase(fetchAdminAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.analytics = null;
        state.error = action.payload;
      });
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  adminAnalyticsSlice.actions;

export const selectAnalytics = (state) => state.analytics;

export default adminAnalyticsSlice.reducer;
