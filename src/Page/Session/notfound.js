import React from 'react'
import './NotFound.css'
import notFound from './assets/404.jpg'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
function NotFound() {
    return (
        <div className='wrong__Container'>
        <div className='image__Container'>
            <img src={notFound} alt='404 error' className='image' />
        </div>
        <Link to="/">
            <Button variant="outlined" size="medium">
                Go To Back Page
            </Button>
        </Link>
    </div>
    );
}

export default NotFound 