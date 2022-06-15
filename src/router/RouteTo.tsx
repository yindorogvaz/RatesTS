import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {ExchangeRate} from '../components'
import {TableRates, NotFoundPage} from '../pages'


export const RouteTo: React.FC = () => {

    const messageError = <>404: PAGE NOT FOUND. Go <Link to='/'>home</Link></>

    return (
                <Routes>
                    <Route path='/' element={<ExchangeRate />} />
                    <Route path='/currency' element={<TableRates />} />
                    <Route path='*' element={<NotFoundPage message={messageError} />} />
                </Routes>
    )
}
