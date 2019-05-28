import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            
            {
                projects && projects.map( //The ampersan is used to evaluate if there's projects to implement the map
                    project => {
                        return(
                            <ProjectSummary project={project} key={project.id} />
                        )

                    }
                )
            }

        </div>
    )
}

export default ProjectList;