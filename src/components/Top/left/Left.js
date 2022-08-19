import React from 'react'
import Profile from './Profile'
import Social from './Social'
import { NavLink } from 'react-router-dom';

const Left = ({marginTopCustom}) => {
   
    return (
        <div className="left bg-cover backdrop-blur-sm relative lg:h-full lg:w-1/3">
            <NavLink to='/old_version' className="old_version" alt="old-version">📁</NavLink>
            {/* <div className="max-w-md mx-auto py-5" style={{marginTop:`${marginCustom}`}}> */}
            <div className={`max-w-md mx-auto py-5 lg:mt-${marginTopCustom}`}>
                {/* scroll change marginTop value */}
                <Profile />
                <Social />
            </div>
        </div>
    )
}

export default Left