import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Box, Toolbar, Typography,} from '@mui/material'
import DropDown from './dropDown'
import {styles} from './styles'


const links = {
    '&:hover': {
        color: 'red!important',
        opacity: '.5'
    },
    '& a': {
        color: 'white',
        marginLeft: '15px',
        textDecoration: 'none',
    }
}


const Header: React.FC = () => {

    return (
        <Box sx={styles.header}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={links}>
                        <Link to='/'>Exchange</Link>
                    </Typography>
                    <Typography variant='h6' component='div' sx={links}>
                        <Link to='/currency'>Currency</Link>
                    </Typography>
                    <Box sx={styles.centerSelects}
                    >
                        <DropDown />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header

