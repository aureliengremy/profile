import React from 'react'
import github from '../../../assets/rs-icones/w-icons8-github-60.png'
import linkedin from '../../../assets/rs-icones/w-icons8-linkedin-60.png'
import twitter from '../../../assets/rs-icones/w-icons8-twitter-60.png'
import codepen from '../../../assets/rs-icones/w-icons8-codepen-50.png'
import dev from '../../../assets/rs-icones/w-icons8-dev-64.png'

const Social = () => {

    const socialLinks = {
        github: 'https://github.com/aureliengremy',
        linkedin: 'https://www.linkedin.com/in/aureliengremy',
        twitter: 'https://twitter.com/AurelGy',
        codepen: 'https://codepen.io/OrL',
        dev: 'https://dev.to/iamorl'
    }

    const socialIcon = (rs) => {
        switch (rs) {
            case "github":
                return <img src={github} className="w-8" alt='github-icone' />
            case "linkedin":
                return <img src={linkedin} className="w-8" alt='linkedin-icone' />
            case "twitter":
                return <img src={twitter} className="w-8" alt='twitter-icone' />
            case "codepen":
                return <img src={codepen} className="w-8" alt='codepen-icone' />
            case "dev":
                return <img src={dev} className="w-8" alt='dev-icone' />
            default:
                return ''
        }
    }

    return (
        <div className="social flex justify-between w-6/12 mx-auto">
            {
                Object.entries(socialLinks).map(([key, value]) => {
                    return (
                        <a href={value} target="_blank" rel="noopener noreferrer">
                            {socialIcon(key)}
                        </a>
                    )
                })
            }
        </div>
    )
}

export default React.memo(Social)