import React from 'react'
import { Route, Routes, } from 'react-router-dom';
import Frontend from '../Pages/Frontend';
import Auth from '../Pages/Auth';
import Dashboard from '../Pages/Dashboard';

export default function PublicRoutes() {
    return (
        <>
            <Routes>
                <Route path='/*' element={<Frontend />} />
                <Route path='/Auth/*' element={<Auth />} />
                <Route path='/Dashboard/*' element={<Dashboard />} />
                <Route path='*' element={<h1 className='text-center'>Page Not Found*</h1>} />
            </Routes>
        </>
    )
}
