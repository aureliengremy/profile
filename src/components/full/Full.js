import React from 'react'
import SectionDescription from '../right/SectionDescription'
import SectionCompetence from '../right/SectionCompetence'
import SectionProject from '../right/SectionProject'
import SectionForm from '../right/SectionForm'

const Full = () => {
  return (
    <div className="col-md-12 col-12">
            <div className="container scroll-container">
                <SectionDescription />
                <SectionCompetence />
               
            </div>
        </div>
  )
}

export default Full