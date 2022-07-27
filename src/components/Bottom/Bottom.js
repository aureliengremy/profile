import React from 'react'
import Footer from './Footer'
import SectionForm from './SectionForm'

const Bottom = () => {
  return (
    <div className="row screen-row">
        <div className="col-md-8 col-12">
            <SectionForm/>
        </div>
        <div className="col-md-4 col-12">
            <Footer/>
        </div>
        </div>
  )
}

export default Bottom