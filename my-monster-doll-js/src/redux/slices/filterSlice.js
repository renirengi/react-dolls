import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    activeCategory: "All",
    sort: {
        name: 'age (DESC)', sortProperty: 'year'
    },
    currentPage: 1,
    searchValue: ''
};
const filterSlice = createSlice({
    name: "filter",
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
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setFilters(state, action) {
            state.activeCategory = action.payload.activeCategory;
            state.sort = action.payload.sort;
            state.currentPage = Number(action.payload.currentPage);
        },
    },
})
export const selectFilter = (state) => state.filter;
export const selectSearchValue = (state) => state.filter.searchValue;
export const { setCategory, setFilters, setSort, setCurrentPage, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;