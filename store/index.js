import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../features/shop/shopSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
// import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/cartSlice'
import { shopApi } from '../services/shopService'
// import { authApi } from '../services/authService'

export const store = configureStore({
    reducer: {
        shop: shopReducer,
        cart: cartReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        //     auth: authReducer,
        //     [authApi.reducerPath]: authApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(shopApi.middleware),
    //         .concat(authApi.middleware),
})

setupListeners(store.dispatch)