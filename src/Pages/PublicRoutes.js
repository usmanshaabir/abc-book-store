import React from 'react'
import { Route, Routes, } from 'react-router-dom';
import Frontend from '../Pages/Frontend';
import Auth from '../Pages/Auth';
import Dashboard from '../Pages/Dashboard';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';

export default function PublicRoutes() {
    return (
        <>
            {localStorage.getItem('login') ?
                <>
                    <Routes>
                        <Route path='/*' element={<Frontend />} />
                        <Route path='/Auth/*' element={<Auth />} />
                        <Route path='/Dashboard/*' element={<Dashboard />} />
                        <Route path='*' element={<h1 className='text-center'>Page Not Found*</h1>} />
                    </Routes>
                </>
                :
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            }

        </>
    )
}
