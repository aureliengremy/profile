import React, { Fragment, useState } from 'react'
import Left from './left/Left'
import Right from './right/Right'

const Top = () => {

    const [rightScroll, setRightScroll] = useState({
        maxScrollHeight: '',
        scrollTop: ''
    })
    const [pourcentageScroll, setPourcentageScroll] = useState('')

    const getScroll = (getMaxScrollHeight, getDivScrollTop) => {
        setRightScroll({
            maxScrollHeight: getMaxScrollHeight,
            scrollTop: getDivScrollTop
        })
        setPourcentageScroll(((rightScroll.scrollTop / rightScroll.maxScrollHeight) * 100)/2)
    }
    console.log(rightScroll)

    return (
        <Fragment>
            <Left pourcScroll={pourcentageScroll} />
            <Right getScroll={getScroll} />
        </Fragment>
    )
}

export default Top