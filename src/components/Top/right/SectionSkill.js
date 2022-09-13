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
// import bootstrap from '../../../assets/comp-icones/bootstrap.png'
import git from '../../../assets/comp-icones/git.png'
import github from '../../../assets/comp-icones/github.png'
import gitlab from '../../../assets/comp-icones/gitlab.png'
import heroku from '../../../assets/comp-icones/heroku.png'
import intellij from '../../../assets/comp-icones/intellij.png'
import java from '../../../assets/comp-icones/java.png'
import sql from '../../../assets/comp-icones/sql.png'
import tailwind from '../../../assets/comp-icones/tailwind-css.png'
import vscode from '../../../assets/comp-icones/vscode.png'
import CardSkill from '../../Card/CardSkill'
import Skill from './Skill'
import { useState } from 'react'


const SectionSkill = ({ addClass, sendSkills}) => {

    console.log(sendSkills);
    return (
        <div className={`section-skill ${addClass}`}>
            <h3 className="font-bold text-gray-800 text-lg pb-2">Compétence</h3>
            <div className="">
                <CardSkill addClass="m-3">
                    <h4 className="font-bold text-gray-800 text-lg p-4 pb-2">Language</h4>
                    <div className="flex flex-wrap justify-center p-2 gap-2">
                        <Skill iconeSrc={html} />
                        <Skill iconeSrc={sass} />
                        <Skill iconeSrc={ruby} />
                        <Skill iconeSrc={javascript} />
                        <Skill iconeSrc={react} />
                        <Skill iconeSrc={git} />
                        <Skill iconeSrc={java} />
                        <Skill iconeSrc={sql} />
                        <Skill iconeSrc={tailwind} />
                    </div>
                </CardSkill>
                <CardSkill addClass="m-3">
                    <h4 className="font-bold text-gray-800 text-md p-4 pb-2">Tools</h4>
                    <div className="flex flex-wrap justify-center p-2 gap-2">
                        <Skill iconeSrc={linux} />
                        <Skill iconeSrc={notion} />
                        <Skill iconeSrc={raspberry} />
                        <Skill iconeSrc={github} />
                        <Skill iconeSrc={gitlab} />
                        <Skill iconeSrc={heroku} />
                        <Skill iconeSrc={intellij} />
                        <Skill iconeSrc={vscode} />
                    </div>
                </CardSkill>
                <CardSkill addClass="m-3">
                    <h4 className="font-bold text-gray-800 text-lg p-4 pb-2">Design</h4>
                    <div className="flex flex-wrap justify-center p-2 gap-2">
                        <Skill iconeSrc={illustrator} />
                        <Skill iconeSrc={photoshop} />
                        <Skill iconeSrc={xd} />
                        <Skill iconeSrc={figma} />
                    </div>
                </CardSkill>
            </div>
        </div>
    )
}

export default React.memo(SectionSkill)