import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchExchangeSlice = createAsyncThunk<any>(
    'exchangeRate/fetchExchangeSlice',
    async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/latest`)
            const data = await response.json()
            return data
        } catch (error) {
            throw error
        }
    },
)