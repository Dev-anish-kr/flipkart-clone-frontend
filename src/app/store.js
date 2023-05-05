import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from "../features/userInfoFetch/userInfoSlice"

export const store = configureStore({
  reducer: {
    userInfo:userInfoReducer,
  },
})