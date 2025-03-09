import { createSlice } from "@reduxjs/toolkit"


const newsSlice = createSlice({
    name:"news",
    initialState:{
        query:'business',
        language:'en',
        country:'in',
    },
    reducers:{
        setQuery: (state, action) => {
            state.query = action.payload
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        setCountry: (state, action) => {
            state.country = action.payload
        },
    }
})
export const {setQuery, setLanguage, setCountry} = newsSlice.actions
export default newsSlice.reducer

