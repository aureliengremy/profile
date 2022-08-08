import React from 'react'
import Profile from './Profile'
import Social from './Social'
import { NavLink } from 'react-router-dom';

const Left = () => {
    return (
        <div className="left">
            <NavLink to='/old_version' className="old_version" alt="old-version">📁</NavLink>
            <div className="max-w-md mx-auto py-5">
                <Profile />
                <Social />
            </div>
        </div>
    )
}

export default Left