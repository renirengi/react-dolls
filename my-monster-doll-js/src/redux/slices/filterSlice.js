import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    activeCategory: "All",
    sort: {
        name: 'age (DESC)', sortProperty: 'year'
    },
    currentPage: 1,
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
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setFilters(state, action) {
            state.activeCategory = action.payload.activeCategory;
            state.sort = action.payload.sort;
            state.currentPage = Number(action.payload.currentPage);
        },
    },
})
export const selectFilter = (state) => state.filter;
export const { setCategory, setFilters, setSort, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;