import React, { useEffect, useState }  from 'react'
import SectionDescription from './SectionDescription'
import SectionCompetence from './SectionCompetence'
import Accordion from '../../Accordion/Accordion'

const Right = ({getScroll}) => {

    const [maxScrollHeight, setMaxScrollHeight] = useState('')
    const [scrollTop, setScrollTop] = useState('')

    const handleScroll = event => {
        setMaxScrollHeight(event.currentTarget.scrollHeight - event.currentTarget.offsetHeight)
        setScrollTop(event.currentTarget.scrollTop)
        // console.log('offsetHeight: ', event.currentTarget.offsetHeight);
        // console.log('scrollHeight: ', event.currentTarget.scrollHeight);
        // console.log('scrollTop: ', event.currentTarget.scrollTop);
    };
    
    useEffect(() => {
        getScroll(maxScrollHeight, scrollTop)

    }, [scrollTop])



    return (
        <div className="right lg:h-full lg:w-2/3 overflow-y-auto" onScroll={handleScroll}>
            <div className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto py-5" >
                <SectionDescription addClass="py-3" />
                <SectionCompetence addClass="py-3" />
                <div className="py-3 space-y-5">
                    <div className="">
                        <Accordion/>
                    </div>
                    <div className="">
                        <Accordion/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Right