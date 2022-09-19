import React from 'react'
import Card from '../Card/Card'
import GMC from '../../assets/images/website-screen/Grenier_Chevrolet_Buick_GMC.png';
import Honda from '../../assets/images/website-screen/Lallier_Ste-Foy_Honda.png';
import Marvel from '../../assets/images/website-screen/Marvel_Quiz_App.png';
import NightSkyper from '../../assets/images/website-screen/NightSkyper.png';
import RentALife from '../../assets/images/website-screen/RentALife.png';
import Toyota from '../../assets/images/website-screen/Toyota_Lachute.png';
import { useRef } from 'react';
import { useEffect } from 'react';

const Project = () => {

    const section = useRef()


    
    useEffect(() => {
        // get the height of the div element
        const offSet = section.current.offsetTop
        console.log(offSet);
        console.log(
            "The height of the div is: ", section.current.offsetHeight
            );
            window.addEventListener('scroll', () => {
                // console.log(window.scrollY)
                if(window.scrollY === offSet) {
                    console.log('bottom')
                }
                
            }) 
        }, []);


    const ProjectsData = [
        {
            name: 'Lallier Ste-Foy - Honda',
            img: Honda,
            text: (
                <div>
                    <p>Développement front-end, production de site-web personnalisé, gestion des environnements et déploiement de plateformes en ligne</p>
                    <ul>
                        <li> Amélioration de support visuel et applicatif</li>
                        <li> Analyse, correction d'anomalies et versionnage du code</li>
                        <li>Développement d’évolutions du framework et CRM</li>
                    </ul>
                    <p>J'ai effectué des tâches/intégration/fix, sur plus de 50 sites différents.</p>
                </div>
            ),
            link: 'https://www.lallierstefoy.com/fr'
        },
        {
            name: 'Grenier - Chevrolet Buick GMC',
            img: GMC,
            text: 'lorem ipsum dolor sit amet, consectet',
            link: 'https://www.grenierchevrolet.com/fr'
        },
        {
            name: 'Lachute - Toyota',
            img: Toyota,
            text: 'lorem ipsum dolor sit amet, consectet',
            link: 'https://www.toyotalachute.com/'
        },
        {
            name: 'Quiz Marvel',
            img: Marvel,
            text: 'lorem ipsum dolor sit amet, consectet',
            link: 'https://marvel-quiz-app-hosted.web.app/'
        },
        {
            name: 'Rent-A-Life',
            img: RentALife,
            text: 'Clone d’Airbnb à partir de zéro en 5 jours. La production est déployée sur Heroku en respectant un workflow efficace et standard. Apprentissage de fonctionnalités avancées telle que le paiement, image upload, search, geocoding…',
            link: 'https://rent-a-life.herokuapp.com/'
        },
        {
            name: 'NightSkyper',
            img: NightSkyper,
            text: 'Inventer, pitcher, concevoir, designer, coder et déployer d’un projet original d’application web en équipe en 2 semaines.',
            link: 'http://www.nightskyper.xyz/'
        },
    ]
    const el = document.getElementsByClassName("section-project")
    if (el) {
        // el.getBoundingClientRect().top
    }
    return (
        <div ref={section} className="section-project mx-auto py-8">
            <h3 className="text-xl text-gray-900">Project</h3>
            <div className="mt-6 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6">
                {ProjectsData.map((project,index) => (
                    <Card 
                            key={index}
                            title={project.name}   
                            text={project.text}
                            image={project.img} 
                            link={project.link} />
                    
                ))}

            </div>
        </div>
    )
}

export default Project