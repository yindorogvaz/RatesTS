import {createSlice} from '@reduxjs/toolkit'
import {fetchExchangeSlice} from '../thunks'
import {InitialState} from '../types'


const state:InitialState = {
    rates: null,
    status: 'loading...',
    error: '',
    loading: false,
}

const exchangeSlice = createSlice({
    name: 'exchangeRate',
    initialState: state,
    reducers: {},
    extraReducers: (builder) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        builder.addCase(fetchExchangeSlice.pending, ( state ) => {
            state.status = 'loading...'
            state.error = ''
            state.loading = true
        }),
            builder.addCase(fetchExchangeSlice.fulfilled, ( state , {payload}) => {
                state.status = 'resolved'
                state.rates = payload.conversion_rates
                state.loading = false
            }),
            builder.addCase(fetchExchangeSlice.rejected, (state, {payload}) => {
                state.status = 'rejected'
                state.error = <string>payload
            })
    }
})

export default exchangeSlice.reducer
export const exchangeRateActions = exchangeSlice.actions
