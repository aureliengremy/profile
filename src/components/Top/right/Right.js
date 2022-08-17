import React from 'react'
import SectionDescription from './SectionDescription'
import SectionCompetence from './SectionCompetence'
import Accordion from '../../Accordion/Accordion'

const Right = () => {

    return (
        <div className="right lg:h-full lg:w-2/3 overflow-y-auto">
            <div className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto py-5">
                <SectionDescription addClass="py-3" />
                <SectionCompetence addClass="py-3" />
                <div className="py-3 space-y-5">
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