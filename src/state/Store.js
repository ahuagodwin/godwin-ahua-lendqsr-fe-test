import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/User-Slice";

export const store = configureStore ({
    reducer: {
        user: userReducer,
    }
})