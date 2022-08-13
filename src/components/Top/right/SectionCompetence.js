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
import Competence from './Competence'


const SectionCompetence = ({addClass}) => {
    console.log(addClass)
    return (
        <div className={`section-competence ${addClass}`}>
            <h3>Compétence</h3>
            <Competence iconeSrc={illustrator} />
            <Competence iconeSrc={photoshop} />
            <Competence iconeSrc={xd} />
            <Competence iconeSrc={figma} />
            <Competence iconeSrc={html} />
            <Competence iconeSrc={javascript} />
            <Competence iconeSrc={linux} />
            <Competence iconeSrc={notion} />
            <Competence iconeSrc={raspberry} />
            <Competence iconeSrc={react} />
            <Competence iconeSrc={ruby} />
            <Competence iconeSrc={sass} />
        </div>
    )
}

export default SectionCompetence