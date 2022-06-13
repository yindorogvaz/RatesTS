import {configureStore} from '@reduxjs/toolkit'
import exchangeReduce from './modules/rates/reducers/exchangeSlice'


const store = configureStore({
    reducer: {
        exchangeRate: exchangeReduce,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store