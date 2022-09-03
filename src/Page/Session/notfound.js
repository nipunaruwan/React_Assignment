import React from 'react'
import './NotFound.css'
import notFound from './assets/404.jpg'
import { Link } from 'react-router-dom'
function NotFound() {
    return (
        <div>
            <img src={notFound} alt=""></img>
        </div>
    )
}

export default NotFound 