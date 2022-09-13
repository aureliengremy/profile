import React from 'react'
import { useState } from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'

const Accordion = ({ title, content, contentTitle, date, skill, handleAccorClick, handleOpen }) => {

    const [contentVisible, setContentVisible] = useState(false)

    const toggleContentVisible = () => {
        setContentVisible(!contentVisible)
        handleOpen(!contentVisible)
    }

    return (
        <div className="accordion_container mt-5 py-2" onClick={() => handleAccorClick(skill)}>
            <div className="accordion">

                <button
                    type="button"
                    className="accordion_title"
                    onClick={() => toggleContentVisible()}
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
                   
                    {/* {content.length > 1 ? 
                        content.forEach(text => {
                            <p>- {text}</p>
                        })
                        :
                        <p>{content}</p>
                    } */}
                    <p>{content}</p>

                </div>
            </div>
        </div>
    );
}

export default Accordion;
