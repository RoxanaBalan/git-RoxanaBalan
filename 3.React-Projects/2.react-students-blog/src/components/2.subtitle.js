import React from 'react';

function Subtitle(props) {
    return (
        <div className="title sub-title">
            Number of students:{props.studentsLength}
        </div>
    );
}

export default Subtitle;
