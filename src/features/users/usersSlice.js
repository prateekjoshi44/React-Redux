import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: "Joe Mama"},
    {id: '1', name: "John Brown"},
    {id: '2', name: "Will Smith"}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer