import React from 'react'
import SectionDescription from './SectionDescription'
import SectionCompetence from './SectionCompetence'
import Accordion from '../../Accordion/Accordion'

const Right = () => {

    return (
        <div className="right col-md-8 col-12">
            <div className="container scroll-container">
                <SectionDescription />
                <SectionCompetence />
                <div className="row">
                    <div className="col-6">
                        <Accordion/>
                    </div>
                    <div className="col-6">
                        <Accordion/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Right