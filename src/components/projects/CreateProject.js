import React, {Component} from 'react'

class CreateProject extends Component {
    
    state = {
        title: '',
        content: ''
    }

    handleChange = (e)=> {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault()

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
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
        )
    }
}

export default CreateProject
