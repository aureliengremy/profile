import React from 'react'
import '../../old_version_style.css';
import old_me from '../../assets/images/old-me-in-the-dark.jpeg'
import { useNavigate } from 'react-router-dom'

const OldVersion = () => {

    const navigate = useNavigate()
    return (
        <div className="old_body">
            <div className="old_container">
                <button onClick={() => navigate('/profile')}> 🔙 to the real one</button>
                <div className="old_card">
                    <div className="old_centred">
                        <img src={old_me} className="old_picture" alt="Aurelien Gremy" />
                    </div>
                    <h1 className="old_title-name old_centred">Aurelien Gremy</h1>
                    <h2 className="old_title-job old_centred">🔥 Developper from the darkness 🔥</h2>
                    <p className="old_description old_centred">
                        From the deepest cave of hell, listening metal and trying to
                        solve world problems with his skills in programming, when god are only
                        looking to have fun.
                    </p>
                    <a href="https://github.com/aureliengremy" className="old_btn old_btn-animated old_centred">Follow me</a>
                    <ul className="old_list old_centred">
                        <li className="old_list-item">
                            <a href="https://www.facebook.com/gremy.aurelien" rel="noreferrer" className="old_social-link" target="_blank">
                                <i className="fa-brands fa-facebook-square"></i>
                            </a>
                        </li>
                        <li className="old_list-item">
                            <a href="https://www.instagram.com/theaurelien/" rel="noreferrer" className="old_social-link" target="_blank">
                                <i className="fa-brands fa-instagram-square"></i>
                            </a>
                        </li>
                        <li className="old_list-item">
                            <a href="https://www.linkedin.com/in/aureliengremy/" rel="noreferrer" className="old_social-link" target="_blank">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OldVersion