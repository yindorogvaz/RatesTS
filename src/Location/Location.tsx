import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {ExchangeRate} from '../Components/Exchange'
import {TableRates} from '../Pages/TablePage'
import {NotFoundPage} from '../Pages/NotFoundPage'

export const Location: React.FC = () => {

    const messageError = <>404: PAGE NOT FOUND. Go <Link to='/'>home</Link></>

    return (
                <Routes>
                    <Route path='/' element={<ExchangeRate />} />
                    <Route path='/currency' element={<TableRates />} />
                    <Route path='*' element={<NotFoundPage message={messageError} />} />
                </Routes>
    )
}
