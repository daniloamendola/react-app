import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

class CreateProject extends Component {
    
    state = {
        title: '',
        content: ''
    }

    handleChange = (e)=> {
        this.setState({
            [e.target.id]:e.target.value
        })
        //console.log(e.target.value)
    }

    handleSubmit = (e)=> {
        e.preventDefault()
        this.props.boundCreateProject(this.state)
        console.log(this.state)
    }

    render(){    
        return (
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">

                <h5 className="grey-text text-darken-3">Create Project</h5>
                <div className="input-field">
                <label htmlFor="title">Project Title </label>
                <input type="text" id="title" onChange={this.handleChange}></input>
                </div>
                <div className="input-field">
                <label htmlFor="content">Content</label>
                <input type="text" id="content" onChange={this.handleChange}></input>
                </div>
                
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Add</button>
                </div>
            </form>
        </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return { // this is a bound action creator that automatically dispatches
      boundCreateProject: (project) => dispatch(createProject(project))
    }
  }
  
export default connect(null, mapDispatchToProps)(CreateProject)
