import React from 'react'
import github from '../../../assets/rs-icones/w-icons8-github-60.png'
import linkedin from '../../../assets/rs-icones/w-icons8-linkedin-60.png'
import twitter from '../../../assets/rs-icones/w-icons8-twitter-60.png'
import codepen from '../../../assets/rs-icones/w-icons8-codepen-50.png'
import dev from '../../../assets/rs-icones/w-icons8-dev-64.png'

const Social = () => {
    return (
        <div className="social col-md-12 col-12 mb-3">
            <div className="social-icon">
                <a href="https://github.com/aureliengremy" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github-icone" />
                </a>
                <a href="https://www.linkedin.com/in/aureliengremy" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin-icone" />
                </a>
                <a href="https://twitter.com/AurelGy" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="twitter-icone" />
                </a>
                <a href="https://codepen.io/OrL" target="_blank" rel="noopener noreferrer">
                    <img src={codepen} alt="codepen-icone" />
                </a>
                <a href="https://dev.to/iamorl" target="_blank" rel="noopener noreferrer">
                    <img src={dev} alt="dev-icone" />
                </a>
            </div>
        </div>
    )
}

export default Social