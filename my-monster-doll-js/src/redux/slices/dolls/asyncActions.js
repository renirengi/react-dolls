import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchDolls = createAsyncThunk(
    'dolls/fetchDollsStatus',
    async () => {
        const { data } = await axios.get(`http://localhost:3000/dolls?_page=${currentPage}&_limit=8&${category}&_sort=${sortBy}&_order=${order}${search}`)
        return data
    }
);