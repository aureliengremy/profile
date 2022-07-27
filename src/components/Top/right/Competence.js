import React from 'react'

const Competence = ({iconeSrc, iconeName}) => {
  return (
    <div>
        <img src={iconeSrc} alt={iconeName} width='50px' height='50px' />
    </div>
  )
}

export default Competence