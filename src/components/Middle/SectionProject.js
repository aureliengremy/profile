import React from 'react'
import Card from '../Card/Card'

const Project = () => {
    const el = document.getElementsByClassName("section-project")
    if (el) {
        // el.getBoundingClientRect().top
    }
    return (
        <div className="section-project mx-auto py-8">
            <h3 className="text-xl text-gray-900">Project</h3>
            <div className="mt-6 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6">
                <Card text="card 1" link="https://rent-a-life.herokuapp.com/"/>
                <Card text="card 2" link="https://rent-a-life.herokuapp.com/"/>
                <Card text="card 3" link="https://rent-a-life.herokuapp.com/"/>
            </div>
        </div>
    )
}

export default Project