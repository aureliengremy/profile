import React from 'react'
import Profile from './Profile'
import Social from './Social'
import { NavLink } from 'react-router-dom';

const Left = () => {
    return (
        <div className="left col-md-4 col-12">
            <NavLink to='/old_version' className="old_version" alt="old-version">📁</NavLink>
            <div className="container h-100">
                <div className="row left-inner h-100">
                    <Profile/>
                    <Social/>
                </div>
            </div>
        </div>
    )
}

export default Left