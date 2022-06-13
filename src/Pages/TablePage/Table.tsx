import React, {useEffect, useMemo, useState} from 'react'
import {
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Table,
    TextField,
    Box} from '@mui/material'
import {useSelector} from 'react-redux'
import {RootState} from 'store'
import {Rates} from '../../store/modules/rates/types'
import {styles} from './styles'
import {format} from 'utils/format'



export const TableRates: React.FC = () => {

    const {rates, loading} = useSelector((state: RootState) => state.exchangeRate)
    const [searchRate, SetSearchRate] = useState<string>('')

    const title = (el: string) => {
        return rates!.EUR * rates!.UAH / rates![el]
    }

    const searchHandle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        SetSearchRate(e.currentTarget.value)
    }

    const filteredRates = useMemo(() => Object.keys(rates as Rates).filter((rate) => {
            return rate.toLowerCase().includes(searchRate.toLowerCase())
        }), [searchRate])


    if (loading || rates === null) {
        return <div>loading...</div>
    }

    return (
        <Box>
            <Box sx={styles.searchBox}>
                <TextField
                    sx={styles.searchField}
                    id='filled-basic' label='search'
                    variant='standard'
                    onChange={(e) => searchHandle(e)}/>
            </Box>

            <Box sx={styles.tableBox}>
                <TableContainer sx={styles.tableContainer}>
                    <Table size={'small'} sx={styles.table} aria-label='simple table'>
                        <TableHead>
                            <TableRow sx={styles.tableRowTop} >
                                <TableCell>Курс к гривне</TableCell>
                                <TableCell align='right'>UAH</TableCell>
                            </TableRow>
                        </TableHead>
                        {filteredRates.map((key) => (
                            <TableBody key={key}>
                                <TableRow
                                    sx={styles.tableRowBottom}
                                >
                                    <TableCell component='th' scope='row'>
                                        {key}
                                    </TableCell>
                                    <TableCell align='right'>{format(title(key))}</TableCell>
                                </TableRow>
                            </TableBody>
                        ))}
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

