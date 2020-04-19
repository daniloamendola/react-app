import React, {Component} from 'react'
import ProjectSummary from './ProjectSummary'
import projectReducer from '../../store/reducers/projectReducer'


const ProjectList = ({projects}) => {

    return(
        <div className="project-list section">
            {projects && projects.map(project => {
                return(
                <ProjectSummary key={project.id} project={project} />
            )})}
        </div>

    )
}

export default ProjectList