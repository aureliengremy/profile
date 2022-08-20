import React, { useEffect } from 'react'
import Profile from './Profile'
import Social from './Social'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Left = ({pourcScroll}) => {

    const [leftStyle, setLeftStyle] = useState({
        backgroundSize: "160%",
        transitionProperty: "background-position",
        transitionDuration: "3s",
        backgroundPosition: "left 0px"
    })
    useEffect(() => {
        setLeftStyle({
            ...leftStyle,
            backgroundPosition: `left -${pourcScroll}px`
        })
    }, [leftStyle])
   
    return (
        <div className="left backdrop-blur-sm relative lg:h-full lg:w-1/3"
             style={leftStyle}>
            <NavLink to='/old_version' className="old_version" alt="old-version">📁</NavLink>
            {/* <div className="max-w-md mx-auto py-5" style={{marginTop:`${marginCustom}`}}> */}
            <div className='max-w-md mx-auto py-5 lg:mt-64'>
                {/* scroll change marginTop value */}
                <Profile />
                <Social />
            </div>
        </div>
    )
}

export default Left