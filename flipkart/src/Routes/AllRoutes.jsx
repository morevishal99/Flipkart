import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Page/HomePage'
import Profile from '../Page/Profile'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>
        </>
    )
}

export default AllRoutes