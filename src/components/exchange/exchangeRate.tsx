import React, { useEffect, useState } from 'react'
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material'
import { useSelector } from 'react-redux'
import {RootState} from 'store'
import {format} from 'utils/format'
import {styles} from "./styles";


const ExchangeRate: React.FC = () => {

    const {rates, loading} = useSelector((state: RootState) => state.exchangeRate)
    const [currencyFrom, setCurrencyFrom] = useState<string>('UAH')
    const [currencyTo, setCurrencyTo] = useState<string>('EUR')
    const [amountFrom, setAmountFrom] = useState<number>(0)
    const [amountTo, setAmountTo] = useState<number>(0)

    const handleCurrencyFromChange = (currencyFrom: string) => {
        setAmountTo(format(amountFrom * rates![currencyTo] / rates![currencyFrom]))
        setCurrencyFrom(currencyFrom)
    };

    const handleCurrencyToChange = (currencyTo: string) => {
        setAmountTo(format(amountFrom * rates![currencyTo] / rates![currencyFrom]))
        setCurrencyTo(currencyTo)
    }

    const handleAmountToChange = (amountTo: number) => {
        setAmountFrom(format(amountTo * rates![currencyFrom] / rates![currencyTo]))
        setAmountTo(amountTo)
    }

    const handleAmountFromChange = (amountFrom: number) => {
        setAmountTo(format(amountFrom * rates![currencyTo] / rates![currencyFrom]))
        setAmountFrom(amountFrom)
    }

    useEffect(() => {
        if(rates !== null) {
            setAmountFrom(rates.UAH)
            setAmountTo(rates.EUR)
        }
    }, [rates])

    if (loading || rates === null) {
    return <div>loading...</div>
}
    return (
        <Box sx={styles.rates}>

            <div>
                <Box sx={styles.formBox}>
                    <FormControl fullWidth>
                        <InputLabel id='exchange-rate'>Currency</InputLabel>
                        <Select
                            defaultValue={currencyFrom}
                            labelId='currency'
                            id='rate'
                            label='exchange'
                            onChange={(e) => handleCurrencyFromChange(e.target.value)}
                        >
                            {Object.keys(rates).map((key) => (
                                <MenuItem
                                    value={key}
                                    key={key}
                                >
                                    {key}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        value={amountFrom}
                        type='number'
                        id='standard-basic'
                        onChange={(e) => handleAmountFromChange(Number(e.target.value))}
                        label='amount'
                        variant='standard'
                    />
                </Box>
            </div>

            <div>
                <Box sx={styles.formBox}>
                    <FormControl fullWidth>
                        <InputLabel id='exchange-rate'>Currency</InputLabel>
                        <Select
                            labelId='currency'
                            id='rate'
                            label='exchange'
                            value={currencyTo}
                            onChange={(e) => handleCurrencyToChange(e.target.value)}
                        >
                            {Object.keys(rates).map((key) => (
                                <MenuItem
                                    value={key}
                                    key={key}
                                >
                                    {key}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        value={amountTo}
                        type='number'
                        id='standard-basic'
                        onChange={(e) => handleAmountToChange(Number(e.target.value))}
                        label='amount'
                        variant='standard'
                    />
                </Box>
            </div>

        </Box>
    )
}

export default ExchangeRate
