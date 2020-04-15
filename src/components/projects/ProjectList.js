import React, {Component} from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = () => {

    const projects = [ProjectSummary()]

    return(
        <div className="project-list section">
            {projects}
            <ProjectSummary/>

        </div>

    )
}

export default ProjectList