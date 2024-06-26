import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import cartReducer from './slices/cartSlice'
import dollsReducer from './slices/dolls/dollsSlice'
import userReducer from './slices/userSlice'

export default configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartReducer,
        dolls: dollsReducer,
        user: userReducer
    },
})