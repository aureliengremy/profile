import React from 'react'
import SectionDescription from './SectionDescription'
import SectionCompetence from './SectionCompetence'
import Accordion from '../../Accordion/Accordion'

const Right = () => {

    return (
        <div className="right">
            <div className="max-w-md mx-auto py-5">
                <SectionDescription addClass="py-3" />
                <SectionCompetence addClass="py-3" />
                <div className="py-3">
                    <div className="py-2">
                        <Accordion/>
                    </div>
                    <div className="py-2">
                        <Accordion/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Right