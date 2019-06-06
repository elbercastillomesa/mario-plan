import React from 'react';

const ProjectSummary = ({project}) => {

    var date = new Date(project.createdAt.seconds*1000);
    var formattedTime = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay() +
                     ' ' + date.getHours() + ':' + ("0" + date.getMinutes()).substr(-2);

    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by { project.authorFirstName + ' ' + project.authorLastName }</p>
                <p className="grey-text">{ formattedTime }</p>
            </div>
        </div>
    )
}

export default ProjectSummary;