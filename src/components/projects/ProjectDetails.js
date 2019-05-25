import React from 'react';

const ProjectDetails = (props)  => {

    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Project Title - {id}</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nesciunt suscipit aliquid enim quod laboriosam sunt natus repudiandae tempore velit, nostrum fugit ad, deserunt, sit officiis id. Necessitatibus, harum qui?</p>                
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by EPCM</div>
                    <div>24th May, 21:36</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;