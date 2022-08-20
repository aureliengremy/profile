import React from 'react'

const Description = ({ addClass }) => {
    return (
        <div className={`section-description ${addClass}`}>
            <h3 className="font-bold text-gray-800 text-lg pb-2">Qui suis-je ?</h3>
            <div className="text-gray-600">
                <p className="py-2">Je suis Aurélien Gremy, j'ai toujours tout fait pour créer la meilleure des synergies entre ces deux qualités, sportif dans une constante optimisation dès mes objectifs, musicien entretenant sa soif de créativité dans une recherche constante de nouveautés.</p>
                <p className="py-2">Mon parcours atypique m'a permis d'acquérir une certaine expertise et un savoir-faire multidisciplinaire.</p>
                <p className="py-2">Titulaire d’une maîtrise en e-Business et e-Marketing, après plusieurs formations en ligne qui m'ont permis de cumuler plusieurs centaines d'heures d'apprentissage sur des plateformes d'apprentissage en ligne comme Udemy ou encore OpenClassroom et un Bootcamp de web-dev full-stack intensif dans la célèbre école de code LEWAGON.
                    Complétée par ma passion pour internet et l’informatique, je suis passionnée de nouvelles technologies, geek depuis mon plus jeune âge, me tenant constamment au courant des nouveautés afin de toujours avoir un œil sur les dernières innovations de notre monde.</p>
            </div>
        </div>
    )
}

export default Description