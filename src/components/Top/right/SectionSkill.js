import React, { useState } from 'react'
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
import { useEffect } from 'react'


const SectionSkill = ({ addClass, sendSkills }) => {

    const [borderSkills, setBorderSkills] = useState('')

    const langages = [
        { icone: html, name: 'html' },
        { icone: sass, name: 'sass' },
        { icone: ruby, name: 'ruby' },
        { icone: javascript, name: 'javascript'},
        { icone: react, name: 'react' },
        { icone: git, name: 'git' },
        { icone: java, name: 'java' },
        { icone: sql, name: 'sql' },
        { icone: tailwind, name: 'tailwind' }
    ]
    const tools = [
        { icone: linux, name: 'linux' },
        { icone: notion, name: 'notion' },
        { icone: raspberry, name: 'raspberry' },
        { icone: github, name: 'github'},
        { icone: gitlab, name: 'gitlab' },
        { icone: heroku, name: 'heroku' },
        { icone: intellij, name: 'intellij' },
        { icone: vscode, name: 'vscode' }
    ]
    const designs = [
        { icone: illustrator, name: 'illustrator' },
        { icone: photoshop, name: 'photoshop' },
        { icone: xd, name: 'xd' },
        { icone: figma, name: 'figma'}  
    ]
    

    const addBorder = (skills) => {
        sendSkills.forEach(element => {
            // console.log(element);
            let divSkill = document.getElementById(element)
            divSkill.classList.add('border-skill')
            setBorderSkills(skills);
        })
    }
    const removeBorder = () => {
        let divWithClass = document.getElementsByClassName('border-skill')
        Array.from(divWithClass).forEach((el) => {
            el.classList.remove('border-skill')
            setBorderSkills('');
        });
    }



    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    useEffect(() => {
        console.log(sendSkills, borderSkills);
        console.log(equals(sendSkills, borderSkills));
        if (sendSkills) {
            if (borderSkills === '') {
                addBorder(sendSkills)
            } else if (equals(sendSkills, borderSkills)) {
                removeBorder()
            } else {
                removeBorder()
                addBorder(sendSkills)
            }
        }
    }, [sendSkills])


    return (
        <div className={`section-skill ${addClass}`}>
            <h3 className="font-bold text-gray-800 text-lg pb-2">Compétence</h3>
            <div className="">
                <CardSkill addClass="m-3">
                    <h4 className="font-bold text-gray-800 text-lg p-4 pb-2">Language</h4>
                    <div className="flex flex-wrap justify-center p-2 gap-2">
                        {langages.map((item, index) => (
                            <Skill key={index} iconeSrc={item.icone} id={item.name} />
                        ))}
                    </div>
                </CardSkill>
                <CardSkill addClass="m-3">
                    <h4 className="font-bold text-gray-800 text-md p-4 pb-2">Tools</h4>
                    <div className="flex flex-wrap justify-center p-2 gap-2">
                        {tools.map((item, index) => (
                            <Skill key={index} iconeSrc={item.icone} id={item.name} />
                        ))}
                    </div>
                </CardSkill>
                <CardSkill addClass="m-3">

                    <h4 className="font-bold text-gray-800 text-lg p-4 pb-2">Design</h4>
                    <div className="flex flex-wrap justify-center p-2 gap-2">
                        {designs.map((item,index) => (
                            <Skill key={index} iconeSrc={item.icone} id={item.name} />
                        ))}
                    </div>
                </CardSkill>
            </div>
        </div>
    )
}

export default React.memo(SectionSkill)