import React, { Fragment } from 'react'
import Left from './left/Left'
import Right from './right/Right'

const Top = () => {

    return (
        <Fragment>
            <Left marginTopCustom={64}/>
            <Right />
        </Fragment>
    )
}

export default Top