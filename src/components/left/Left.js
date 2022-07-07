import React from 'react'
import Profile from './Profile'
import Social from './Social'

const Left = () => {
    return (
        <div className="left col-md-4 col-12">
            <div className="old_version">OLD</div>
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