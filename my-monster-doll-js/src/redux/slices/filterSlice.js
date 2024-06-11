import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    activeCategory: "All",
    activeCharacter: '',
    activeSeries: '',
    activeYear: '',
    activeGender: '',
    activeExclusive: '',
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
        setCharacter(state, action) {
            state.activeCharacter = action.payload;
        },
        setYear(state, action) {
            state.activeYear = action.payload;
        },
        setGender(state, action) {
            state.activeGender = action.payload;
        },
        setSeries(state, action) {
            state.activeSeries = action.payload;
        },
        setExclusive(state, action) {
            state.activeExclusive = action.payload;
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
            state.activeCharacter = action.payload.activeCharacter;
            state.activeSeries = action.payload.activeSeries;
            state.activeGender = action.payload.activeGender;
            state.activeExclusive = action.payload.activeExclusive;


            state.activeYear = action.payload.activeYear;

            state.currentPage = Number(action.payload.currentPage);
        },
        resetAdditionalFilters(state) {
            state.activeCharacter = '';
            state.activeExclusive = '';
            state.activeGender = '';
            state.activeSeries = '';
            state.activeYear = '';
            state.activeCategory = 'All'
        }
    },
})
export const selectFilter = (state) => state.filter;

export const selectSearchValue = (state) => state.filter.searchValue;
export const { resetAdditionalFilters, setCategory, setFilters, setSort, setCurrentPage, setSearchValue, setCharacter, setExclusive, setGender, setSeries, setYear } = filterSlice.actions;
export default filterSlice.reducer;