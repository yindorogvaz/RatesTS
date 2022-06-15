import React, {useEffect} from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import {fetchExchangeSlice} from './store/modules/rates/thunks'
import {Header} from './components'
import {RouteTo} from './router'
import {AppDispatch} from './store'


const App: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchExchangeSlice())
    }, [])

    return (
        <div className='App'>
            <div>
                <Header/>
                <RouteTo />
            </div>
        </div>
    )
}

export default App
