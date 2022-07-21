import React from 'react'
import SectionDescription from './SectionDescription'
import SectionCompetence from './SectionCompetence'
import SectionProject from './SectionProject'
import SectionForm from './SectionForm'

const Right = () => {
    return (
        <div className="right col-md-8 col-12">
            <div className="container scroll-container">
                <SectionDescription />
                <SectionCompetence />
                <SectionProject />
                <SectionForm />
            </div>
        </div>
    )
}

export default Right