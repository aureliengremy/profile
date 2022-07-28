import React from 'react'
import { useState } from 'react';

const Accordion = () => {

    const [contentVisible, setContentVisible] = useState(false)

    const toggleContentVisible = () => {
        setContentVisible(!contentVisible)
    }
    // console.log(contentVisible)

    return (
        <div className="accordion_container">
            <div className="accordion">
                <button
                    type="button"
                    className="accordion_title"
                    onClick={() => toggleContentVisible()}
                >
                    Accordion Menu
                </button>
            </div>

            <div
                className={`accordion_content ${contentVisible ? "show_content" : ""
                    }`}
            >
                <div className="accordion_content-inner">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Deleniti hic natus dolore quas sunt earum commodi sit voluptates expedita suscipit,
                       quod, quaerat unde incidunt harum rem provident est laudantium temporibus.</p>
                </div>
            </div>
        </div>
    );
}

export default Accordion;