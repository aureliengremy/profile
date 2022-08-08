import React from 'react'
import me from '../../../assets/images/me-demo-day.png'

const Profile = () => {
    return (
        <div className="profile flex flex-col mx-auto items-center">
            <img src={me} className="profile-img w-32 rounded-full" alt="profile" />
            <div className="profile-title text-gray-700 text-xl tracking-wide py-2">
                <h1>Je suis <span className="font-bold">Aurelien Gremy</span>,</h1>
                <h2> développeur full-stack</h2>
            </div>
        </div>
    )
}

export default Profile