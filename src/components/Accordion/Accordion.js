import React from 'react'
import { useState } from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'

const Accordion = ({ title, content, contentTitle, date, skill, handleAccorClick }) => {

    const [contentVisible, setContentVisible] = useState(false)

    const toggleContentVisible = () => {
        setContentVisible(!contentVisible)
    }
    // https://stackoverflow.com/questions/69587601/allow-accordion-to-only-open-one-at-a-time

    return (
        <div className="accordion_container mt-5 py-2">
            <div className="accordion">

                <button
                    type="button"
                    className="accordion_title"
                    onClick={() => {
                        toggleContentVisible()
                        handleAccorClick(skill)
                    }}
                    
                >
                    <h2 className="font-bold">{title}</h2>
                    <div className="flex items-center">
                        <span className="">{date}</span>
                        <i className="p-2">{contentVisible
                            ? <RiArrowDownSFill size="24px" />
                            : <RiArrowUpSFill size="24px" />}
                        </i>

                    </div>
                </button>
            </div>

            <div
                className={`accordion_content ${contentVisible ? "show_content" : ""
                    }`}
            >
                <div className="accordion_content-inner flex flex-col">
                    <h3 className="pb-2">{contentTitle}</h3>
                    <p>{content}</p>

                </div>
            </div>
        </div>
    );
}

export default Accordion;
