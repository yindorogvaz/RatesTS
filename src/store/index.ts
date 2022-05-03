import {configureStore} from '@reduxjs/toolkit'
import exchangeReduce from './modules/rates/reducers/exchangeSlice'


const store = configureStore({
    reducer: {
        exchangeRate: exchangeReduce,
    }
})


export type RootState = ReturnType<typeof store.getState>
export default store