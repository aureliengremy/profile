import React, { Fragment } from 'react'

const Card = ({title, text, image, link}) => {

    return (
        <Fragment>
        <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden" >
            <img className="h32 w-32 flex-shrink-0" src={image} alt={title} />
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-800">{text}</h3>

            
            </div>
            {/* {text}
            {link} */}
        </div>

        </Fragment>

    )
}

export default Card