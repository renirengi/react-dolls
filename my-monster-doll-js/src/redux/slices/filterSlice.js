import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    activeCategory: "All",
};
const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategory(state, action) {
            state.activeCategory = action.payload;
        },
        setFilters(state, action) {
            state.activeCategory = action.payload.activeCategory;
        },
    },
})
export const selectFilter = (state) => state.filter;
export const { setCategory, setFilters } = filterSlice.actions;
export default filterSlice.reducer;