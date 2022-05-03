import React, {useEffect} from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import {fetchExchangeSlice} from './store/modules/rates/thunks'
import store from './store'
import {Link, Route, Routes} from 'react-router-dom'
import Header from './components/header/header'
import ExchangeRate from './components/exchange/exchangeRate'
import TableRates from './components/tablePage/table'
import NotFoundPage from './components/notFoundPage/notFoundPage'


const App: React.FC = () => {

    type AppDispatch = typeof store.dispatch
    const dispatch = useDispatch<AppDispatch>()

    const messageError = <>404: PAGE NOT FOUND. Go <Link to='/'>home</Link></>

    useEffect(() => {
        dispatch(fetchExchangeSlice())
    }, [])

  return (
      <div className='App'>
          <div>
              <Header />
              <Routes>
                  <Route path='/' element={<ExchangeRate />} />
                  <Route path='/currency' element={<TableRates />} />
                  <Route path='*' element={<NotFoundPage message={messageError} />} />
              </Routes>
          </div>
      </div>
  )
}

export default App
