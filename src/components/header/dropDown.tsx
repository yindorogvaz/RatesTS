import React, {useEffect, useState} from 'react'
import {Box, FormControl, MenuItem, Select, Typography} from '@mui/material'
import {useSelector} from 'react-redux'
import {RootState} from 'store'
import {format} from 'utils/format'
import {styles} from "./styles";


const DropDown: React.FC = () => {

    const {rates, loading} = useSelector((state: RootState) => state.exchangeRate);

    const [storageOne, setStorageOne] = useState<string>('USD')
    const [storageTwo, setStorageTwo] = useState<string>('EUR')
    const [storageThree, setStorageThree] = useState<string>('PLN')


    useEffect(() => {
            if (
                !localStorage.getItem('storage1') ||
                !localStorage.getItem('storage2') ||
                !localStorage.getItem('storage3')
            ) {
                localStorage.setItem('storage1', JSON.stringify({key1: storageOne}))
                localStorage.setItem('storage2', JSON.stringify({key2: storageTwo}))
                localStorage.setItem('storage3', JSON.stringify({key3: storageThree}))
            }
    },[])

    useEffect(() => {
            const s1 = JSON.parse(localStorage.getItem('storage1') || storageOne)
            setStorageOne(s1.key1)
            const s2 = JSON.parse(localStorage.getItem('storage2') || storageTwo)
            setStorageTwo(s2.key2)
            const s3 = JSON.parse(localStorage.getItem('storage3') || storageThree)
            setStorageThree(s3.key3)
    }, [])

    const localChange = (event: any) => {
            if (event.target.name === 'USD') {
                localStorage.setItem('storage1', JSON.stringify({'key1': event.target.value}));
                setStorageOne(event.target.value)
            } else if (event.target.name === 'EUR') {
                localStorage.setItem('storage2', JSON.stringify({'key2': event.target.value}));
                setStorageTwo(event.target.value)
            } else if (event.target.name === 'PLN') {
                localStorage.setItem('storage3', JSON.stringify({'key3': event.target.value}));
                setStorageThree(event.target.value)
            }
    }


    if(loading || rates === null) {
        return <div>loading...</div>
    }
    return (
        <Box sx={styles.dropDownBox}>

            <Box sx={styles.formBox}>
                <FormControl variant='standard' fullWidth sx={styles.form}>
                        <Box>
                            <Select
                                sx={styles.select}
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={storageOne}
                                name='USD'
                                label='rate'
                                onChange={ (name) => localChange(name) }
                            >
                                {Object.keys(rates).map((key) => (
                                    <MenuItem key={key} value={key} >{key}</MenuItem>
                                ))}
                            </Select>
                            <Typography component='span'>
                                {format(rates!.EUR * rates!.UAH / rates![storageOne])}
                            </Typography>
                        </Box>
                </FormControl>
            </Box>

            <Box sx={styles.formBox}>
                <FormControl variant='standard' fullWidth sx={styles.form}>
                    <Box>
                        <Select
                            sx={styles.select}
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={storageTwo}
                            name='EUR'
                            label='rate'
                            onChange={ (name) => localChange(name) }
                        >
                            {Object.keys(rates).map((key) => (
                                <MenuItem key={key} value={key}>{key}</MenuItem>
                            ))}
                        </Select>
                        <Typography component='span'>
                            {format(rates!.EUR * rates!.UAH / rates![storageTwo])}
                        </Typography>
                    </Box>
                </FormControl>
            </Box>

            <Box sx={styles.formBox}>
                <FormControl variant="standard" fullWidth sx={styles.form}>
                    <Box>
                        <Select
                            sx={styles.select}
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={storageThree}
                            name='PLN'
                            label='rate'
                            onChange={ (name) => localChange(name) }
                        >
                            {Object.keys(rates).map((key) => (
                                <MenuItem key={key} value={key}>{key}</MenuItem>
                            ))}
                        </Select>
                        <Typography component='span'>
                            {format(rates!.EUR * rates!.UAH / rates![storageThree])}
                        </Typography>
                    </Box>
                </FormControl>
            </Box>
        </Box>
    )
}

export default DropDown