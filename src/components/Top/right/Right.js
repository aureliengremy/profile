import React, { useEffect, useState, useCallback } from 'react'
import SectionDescription from './SectionDescription'
import SectionResume from './SectionResume'


const Right = ({ getScroll }) => {

    const [maxScrollHeight, setMaxScrollHeight] = useState('')
    const [scrollTop, setScrollTop] = useState('')

    const handleScroll = useCallback(
        event => {
            setMaxScrollHeight(event.currentTarget.scrollHeight - event.currentTarget.offsetHeight)
            setScrollTop(event.currentTarget.scrollTop)
        },
        []
    )
    
    useEffect(() => {
        getScroll(maxScrollHeight, scrollTop)
        // eslint-disable-next-line
    }, [scrollTop, maxScrollHeight])



    return (
        <div className="right lg:h-full lg:w-2/3 overflow-y-auto" onScroll={handleScroll}>
            <div className="max-w-md sm:max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto py-5" >
                <SectionDescription addClass="py-3" />
                <SectionResume addClass="py-3"/>  
            </div>
        </div>
    )
}

export default Right