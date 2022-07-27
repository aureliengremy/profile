import React from 'react'
import SectionDescription from './SectionDescription'
import SectionCompetence from './SectionCompetence'

const Right = () => {
    return (
        <div className="right col-md-8 col-12">
            <div className="container scroll-container">
                <SectionDescription />
                <SectionCompetence />
            </div>
        </div>
    )
}

export default Right