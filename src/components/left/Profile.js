import React from 'react'
import me from '../../assets/images/me-demo-day.png'

const Profile = () => {
    return (
        <div className="profile col-md-12 col-sm-6 col-12 my-3">
            <div className="profile-img mb-3">
                <img src={me} className="" alt="profile" />
            </div>
            <div className="profile-title">
                <h1>Je suis <strong>Aurelien Gremy</strong>,</h1>
                <h2> développeur full-stack</h2>
            </div>
        </div>
    )
}

export default Profile