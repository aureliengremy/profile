import React from 'react'
import Accordion from '../../Accordion/Accordion'
import SectionSkill from './SectionSkill'

const SectionResume = ({ addClass }) => {

    // integrate list exp.pro and formation
    // -> create accordion with title and description (skills used)
    // -> 
    // Pick up datas from Skill with function from SectionResume
    // -> when accordion clicked call function handleClick
    // -> handleClick get the list of skills
    // -> send the list to SectionSkill to highlight icone

    const expProf = [
        {
            id:1,
            title: 'Solution Medias 360 - Montréal, CA',
            date: "2020 / 2022",
            contentTitle: "INTÉGRATEUR / DEV FRONT-END",
            content: "Développement front-end, production de site-web personnalisé, gestion des environnements et déploiement de plateformes en ligne, soutien et amélioration des projets web.",
            skill: ['html', 'css', 'js']
        },
        {
            id:2,
            title: 'ALIZNET - Paris, FR puis Montréal, CA',
            date: "2017 / 2020",
            contentTitle: "DEV FRONT-END",
            content: "Développement front-end, gestion des environnements et déploiement de plateformes e-commerce.",
            skill: ['html', 'css', 'js', 'java']
        },
        {
            id:3,
            title: 'DEFI-PERFORMANCE - FR',
            date: "2014 / 2017",
            contentTitle: "CHEF DE PROJET - COMM / WEBMASTER",
            content: "Création de support visuel et montage vidéo / Mise en ligne et gestion du site Internet de l'écurie / Participation aux événements sportifs de l'écurie",
            skill: ['html', 'css']
        }
    ]
    const formation = [
        {
            id:1,
            title: 'LEWAGON',
            date: "2022",
            contentTitle: "Coding Bootcamp",
            content: "Formation WebDev - FullStack de 9 semaines à temps plein intense pour apprendre le HTML, CSS, Bootstrap, JavaScript ES6,SQL, git, GitHub, Heroku and Ruby on Rails.",
            skill: ['Figma', 'git']
        },
        {
            id:2,
            title: 'ISC Paris',
            date: "2013 / 2016",
            contentTitle: "Master 2 (M2)",
            content: "E-Business & Communication Multimédia / Responsable Communication dans l'association COSMOPOL",
            skill: ['ai', 'ps']
        }
    ]

    const handleAccorClick = (skill) => {
        
        // console.log(skill);
    }

    return (
        <div className="">
            <div className="py-3 space-y-5">
                <h3 className="font-bold text-gray-800 text-lg pb-2">Expérience professionnels</h3>
                {expProf.map(item => (
                    <Accordion
                        key={item.id}
                        title={item.title}
                        date={item.date}
                        contentTitle={item.contentTitle}
                        content={item.content}
                        skill={item.skill}
                        handleAccorClick={handleAccorClick} />
                ))}
                <h3 className="font-bold text-gray-800 text-lg pb-2">Formation</h3>
                {formation.map(item => (
                    <Accordion
                        key={item.id}
                        title={item.title}
                        date={item.date}
                        contentTitle={item.contentTitle}
                        content={item.content}
                        skill={item.skill}
                        handleAccorClick={handleAccorClick}  />
                ))}
            </div>
            <SectionSkill addClass="py-3" />
        </div>

    )
}

export default SectionResume