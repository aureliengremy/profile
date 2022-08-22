import React, { } from 'react'
import Accordion from '../../Accordion/Accordion'
import SectionSkill from './SectionSkill'

const SectionResume = ({ addClass }) => {
    return (
        <div className={addClass}>
            <div className="">
                <Accordion />
            </div>
            <div className="">
                <Accordion />
            </div>
        <SectionSkill addClass="py-3" />
        </div>
    )
}

export default SectionResume