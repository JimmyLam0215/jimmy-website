import React, { useState } from 'react'; 
import JobExperiences from "./JobExperiences";
import IndividualProjectExperiences from "./IndividualProjectExperiences";
import GroupProjectExperiences from "./GroupProjectExperiences";

function Experience () {
    const [activeComponent, setActiveComponent] = useState('job');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'job':
                return <JobExperiences />;
            case 'individual':
                return <IndividualProjectExperiences />;
            case 'group':
                return <GroupProjectExperiences />;
            default:
                return <JobExperiences />;
        }
    };

    return (
        <div className="experiences" id="experiences">
            <h3>Experiences:</h3>
            <button onClick={() => setActiveComponent('job')} className="exp-button">Job Experiences</button>
            <button onClick={() => setActiveComponent('individual')} className="exp-button">Individual Project Experiences</button>
            <button onClick={() => setActiveComponent('group')} className="exp-button">Group Project Experiences</button>
            <div>{renderComponent()}</div>
        </div>
    );
}

export default Experience