import React from 'react'


const ProjectDetails = (props)=>{
    console.log(props)

    const id = props.match.params.id
    
    return(
        <div className="container project-details">
            <div className="card z-depth-0">
                    <div className="card-content">
    <span className="card-title">Project Title - {id}</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod similique tempore, natus nihil expedita optio consequuntur ullam obcaecati, repudiandae sed corporis sint, nobis nemo quidem tenetur id corrupti error soluta.</p>
                    </div>
            </div>
            <div className="card-action gret ligthen-4 grey-text">
                <div>Posted by Dan Ame</div>
                <div>2nd Sept., 2am</div>
            </div>
        </div>
    )
}

export default ProjectDetails