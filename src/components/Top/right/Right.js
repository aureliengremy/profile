import React from 'react'
import SectionDescription from './SectionDescription'
import SectionCompetence from './SectionCompetence'
import Accordion from '../../Accordion/Accordion'

const Right = () => {

    return (
        <div className="right">
            <div className="">
                <SectionDescription />
                <SectionCompetence />
                <div className="">
                    <div className="">
                        <Accordion/>
                    </div>
                    <div className="">
                        <Accordion/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Right