import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deleteProject } from '../../store/actions/projectActions'

class ProjectSummary extends Component{
  constructor(props) {
    super()
  }
  
  
  render(){
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">{this.props.project.title}</span>
          <p>{this.props.project.content}</p>
          <p className="grey-text">3rd September, 2am</p>
          <button ></button>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return { // this is a bound action creator that automatically dispatches
    boundDeleteProject: (project) => dispatch(deleteProject(project))
  }
}

export default connect(null, mapDispatchToProps)(ProjectSummary)


