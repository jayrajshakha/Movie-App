
import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";

const store = configureStore({
     reducer : {
         home : HomeSlice,
     }
})

export default store;
