import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    activeCategory: "All",
    sort: {
        name: 'age (DESC)', sortProperty: 'year'
    },
};
const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategory(state, action) {
            state.activeCategory = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setFilters(state, action) {
            state.activeCategory = action.payload.activeCategory;
            state.sort = action.payload.sort;
        },
    },
})
export const selectFilter = (state) => state.filter;
export const { setCategory, setFilters, setSort } = filterSlice.actions;
export default filterSlice.reducer;