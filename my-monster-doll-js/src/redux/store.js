import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import cartReducer from './slices/cartSlice'
import dollsReducer from './slices/dolls/dollsSlice'

export default configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        dolls: dollsReducer
    },
})