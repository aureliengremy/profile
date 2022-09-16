import React from 'react'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'

const Accordion = ({ title, content, contentTitle, date, skill, handleToggle, open }) => {

    return (
        <div className={`accordion_container mb-5 py-2 ${open ? 'open': ''}`}>
            <div className="accordion">

                <button
                    type="button"
                    className="accordion_title"
                    onClick={() => {
                        handleToggle(title,skill)
                    }}
                    
                >
                    <h2 className="font-bold">{title}</h2>
                    <div className="flex items-center">
                        <span className="">{date}</span>
                        <i className="p-2">{open
                            ? <RiArrowDownSFill size="24px" />
                            : <RiArrowUpSFill size="24px" />}
                        </i>

                    </div>
                </button>
            </div>

            <div
                className={`accordion_content ${open ? "show_content" : ""
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
