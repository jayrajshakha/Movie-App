

import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    url : {},
    genres : {},
}


export const HomeSlie = createSlice({

    name : 'home',

    initialState,

    reducers : {

          getApiConfig : ( state, action) => {

            state.url = action.payload

          },
          getGenres : ( state, action) => {

            state.genres = action.payload

          },
    },

})

export const {getApiConfig, getGenres} = HomeSlie.actions
export default HomeSlie.reducer