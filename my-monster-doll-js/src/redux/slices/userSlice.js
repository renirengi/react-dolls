import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    activeUserName: '',
    activeUserRole: '',
    activeUserId: 0,
    activeUserPassword: '',
    activeUserEmail: '',
    activeUserRating: 0

};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserName(state, action) {
            state.activeUserName = action.payload;
        },
        setUserRole(state, action) {
            state.activeUserRole = action.payload;
        },
        setUserId(state, action) {
            state.activeUserId = action.payload;
        },
        setUserPassword(state, action) {
            state.activeUserPassword = action.payload;
        },
        setUserEmail(state, action) {
            state.activeUserEmail = action.payload;
        },
        setUserRating(state, action) {
            state.activeUserRating = action.payload;
        },
        setUser(state, action) {
            state.activeUserId = Number(action.payload.activeUserId);
            state.activeUserName = action.payload.activeUserName;
            state.activeUserRole = action.payload.activeUserRole;
            state.activeUserPassword = action.payload.activeUserPassword;
            state.activeUserEmail = action.payload.activeUserEmail;
        }
    },
})
export const currentUser = (state) => state.user;
export const { setUserEmail, setUserId, setUserName, setUserPassword, setUserRole, setUser, setUserRating } = userSlice.actions;
export default userSlice.reducer;