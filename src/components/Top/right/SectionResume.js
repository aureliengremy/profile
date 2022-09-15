import React, { useEffect } from 'react'
import { useState } from 'react'
import Accordion from '../../Accordion/Accordion'
import SectionSkill from './SectionSkill'

const SectionResume = ({ addClass }) => {

    const [openKey, setOpenKey] = useState()
    const [showSkills, setShowSkills] = useState([])

    const expProf = [
        {
            id: 1,
            title: 'Solution Medias 360 - Montréal, CA',
            date: "2020 / 2022",
            contentTitle: "INTÉGRATEUR / DEV FRONT-END",
            content: "Développement front-end, production de site-web personnalisé, gestion des environnements et déploiement de plateformes en ligne, soutien et amélioration des projets web.",
            skill: ['html', 'sass', 'javascript']
        },
        {
            id: 2,
            title: 'ALIZNET - Paris, FR puis Montréal, CA',
            date: "2017 / 2020",
            contentTitle: "DEV FRONT-END",
            content: "Développement front-end, gestion des environnements et déploiement de plateformes e-commerce.",
            skill: ['react', 'git', 'sql']
        },
        {
            id: 3,
            title: 'DEFI-PERFORMANCE - FR',
            date: "2014 / 2017",
            contentTitle: "CHEF DE PROJET - COMM / WEBMASTER",
            content: "Création de support visuel et montage vidéo / Mise en ligne et gestion du site Internet de l'écurie / Participation aux événements sportifs de l'écurie",
            skill: ['html', 'css']
        }
    ]
    const formation = [
        {
            id: 1,
            title: 'LEWAGON',
            date: "2022",
            contentTitle: "Coding Bootcamp",
            content: "Formation WebDev - FullStack de 9 semaines à temps plein intense pour apprendre le HTML, CSS, Bootstrap, JavaScript ES6,SQL, git, GitHub, Heroku and Ruby on Rails.",
            skill: ['html', 'git']
        },
        {
            id: 2,
            title: 'ISC Paris',
            date: "2013 / 2016",
            contentTitle: "Master 2 (M2)",
            content: "E-Business & Communication Multimédia / Responsable Communication dans l'association COSMOPOL",
            skill: ['illustrator', 'photoshop']
        }
    ]

    const handleToggle = (key, skill) => {
        setOpenKey(openKey !== key ? key : null)
        setShowSkills(skill)
    }

    return (
        <div className="md:flex lg:block xl:flex">
            <div className="py-3">
                <h3 className="font-bold text-gray-800 text-lg pb-2">Expérience professionnels</h3>
                {expProf.map(item => (
                    <Accordion
                        key={item.id}
                        title={item.title}
                        date={item.date}
                        contentTitle={item.contentTitle}
                        content={item.content}
                        skill={item.skill}
                        handleToggle={handleToggle}
                        open={openKey === item.title}
                    />
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
                        handleToggle={handleToggle}
                        open={openKey === item.title}
                    />
                ))}
            </div>
            <SectionSkill sendSkills={showSkills} addClass="py-3" />
        </div>

    )
}

export default SectionResume