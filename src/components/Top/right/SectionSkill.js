import React from 'react'
import illustrator from '../../../assets/comp-icones/adobe-illustrator.png'
import photoshop from '../../../assets/comp-icones/adobe-photoshop.png'
import xd from '../../../assets/comp-icones/adobe-xd.png'
import figma from '../../../assets/comp-icones/figma.png'
import html from '../../../assets/comp-icones/html-5.png'
import javascript from '../../../assets/comp-icones/javascript.png'
import linux from '../../../assets/comp-icones/linux.png'
import notion from '../../../assets/comp-icones/notion.png'
import raspberry from '../../../assets/comp-icones/raspberry.png'
import react from '../../../assets/comp-icones/react.png'
import ruby from '../../../assets/comp-icones/ruby.png'
import sass from '../../../assets/comp-icones/sass.png'
import Skill from './Skill'


const SectionSkill = ({addClass}) => {
   
    return (
        <div className={`section-Skill ${addClass}`}>
            <h3>Compétence</h3>
            <Skill iconeSrc={illustrator} />
            <Skill iconeSrc={photoshop} />
            <Skill iconeSrc={xd} />
            <Skill iconeSrc={figma} />
            <Skill iconeSrc={html} />
            <Skill iconeSrc={javascript} />
            <Skill iconeSrc={linux} />
            <Skill iconeSrc={notion} />
            <Skill iconeSrc={raspberry} />
            <Skill iconeSrc={react} />
            <Skill iconeSrc={ruby} />
            <Skill iconeSrc={sass} />
        </div>
    )
}

export default SectionSkill