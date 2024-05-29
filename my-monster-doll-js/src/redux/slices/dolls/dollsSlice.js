import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchDolls = createAsyncThunk(
    'dolls/fetchDollsStatus',
    async (params) => {
        const { category, sortBy, order, search, currentPage } = params
        const { data, headers } = await axios.get(`http://localhost:3000/dolls?_page=${currentPage}&_limit=8&${category}&_sort=${sortBy}&_order=${order}${search}`)
        const itemCount = headers["x-total-count"];

        return { data, itemCount }
    }
);

const initialState = {
    items: [],
    itemsCount: 0,
    status: 'loading'
};


const dollsSlice = createSlice({
    name: "dolls",
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        },
        setCountsItems(state, action) {
            state.countsItems = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDolls.pending, (state) => {
                state.status = "loading"
                state.items = []
            })
            .addCase(fetchDolls.fulfilled, (state, action) => {
                state.items = action.payload.data
                state.itemsCount = action.payload.itemCount;
                state.status = "success"
            })
            .addCase(fetchDolls.rejected, (state) => {
                state.status = "error"
                state.items = []
            })

    },
})
export const selectDolls = (state) => state.dolls;
export const { setItems, setCountsItems } = dollsSlice.actions;
export default dollsSlice.reducer;