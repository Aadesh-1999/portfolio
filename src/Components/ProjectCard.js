import React from 'react';
import PropTypes from 'prop-types';
import './Styles/projectcard.css';
export const ProjectCard = (props) => {
    return (
        <div>
            <div className="card projectCard text-center border" style={{"width": "18rem","height":"25rem"}}>
                <div className="card-body py-4">
                    <h2 className="card-title p-2"><span>{props.cardTitle}</span></h2>
                    <h5 className="card-text">{props.cardText}</h5>
                    <a href={props.projectLink} rel="noreferrer" target="_blank" className="btn btn-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;&nbsp;&nbsp;View Project</a>
                </div>
            </div>
        </div>
    )
}

ProjectCard.defaultProps = {
    cardTitle: "Special title treatment",
    cardText: "With supporting text below as a natural lead-in to additional content.",
    projectLink:'https://finalyear-project-aadesh.vercel.app/'
}
ProjectCard.propTypes = {
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,

}