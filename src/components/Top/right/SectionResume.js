import React, { Fragment } from 'react'
import Accordion from '../../Accordion/Accordion'
import SectionSkill from './SectionSkill'

const SectionResume = ({ addClass }) => {

    // add title for Exp.pro and Formation
    // integrate list exp.pro and formation
    // -> create accordion with title and description (skills used)
    // -> 
    // Pick up datas from Skill with function from SectionResume
    // -> when accordion clicked call function handleClick
    // -> handleClick get the list of skills
    // -> send the list to SectionSkill to highlight icone

    return (
        <Fragment>
            <div className={addClass}>
                <div className="">
                    <h3>Expérience professionnels</h3>
                    <Accordion />
                </div>
                <div className="">
                    <h3>Formation</h3>
                    <Accordion />
                </div>
            </div>
            <SectionSkill addClass="py-3" />
        </Fragment>
    )
}

export default SectionResume