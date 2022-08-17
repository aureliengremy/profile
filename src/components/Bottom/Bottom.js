import React from 'react'
import Footer from './Footer'
import SectionForm from './SectionForm'

const Bottom = () => {
  return (
    <div className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto py-5">
      <div className="lg:h-full lg:w-2/3">
        <SectionForm />
      </div>
      <div className="lg:h-full lg:w-1/3">
        <Footer />
      </div>
    </div>
  )
}

export default Bottom