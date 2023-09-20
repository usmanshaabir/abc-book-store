import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'

export default function index() {
    return (
        <>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
            </Routes>
        </>
    )
}
