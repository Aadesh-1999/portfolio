import React from 'react';
import { ProjectCard } from '../ProjectCard';
import './styles/projects.css';

export const Projects = () => {
    return (
        <div className='m-5 p-5 d-flex justify-content-center'>
            <div className="title">
                <h1>My <span>Recent Works</span></h1><br />
                <h3>Few of my personal HTML, CSS, JavaScript, BootStrap & ReactJS Projects.</h3>
                <div className="projects my-5 row">
                    <div className="col-12 col-md-6 col-lg-4 my-3">
                        <ProjectCard cardTitle="Speech to Sketch" cardText="This was my final year project. #Tech stack used : HTML, CSS, JavaScript, Google Speech API, TenserFlow, NLP" projectLink='https://finalyear-project-aadesh.vercel.app/' />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-3">
                        <ProjectCard cardTitle="Lata Mangeshkar Memorial" cardText="Lata Mangeshkar Memorial build for my family. #Tech stack used : HTML, CSS, JavaScript, Bootstrap, React" projectLink='https://lata-mangeshkar.vercel.app/' />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-3">
                        <ProjectCard cardTitle="Coding Tutes" cardText="Tutorials website like W3Schools & Tutorials Point. #Tech stack used :  HTML, CSS, JavaScript, Bootstrap, React" projectLink='https://coding-tutes.vercel.app/' />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-3">
                        <ProjectCard cardTitle="React TODO List" cardText="TODO list using react. #Tech stack used : HTML, CSS, JavaScript, Bootstrap, ReactJS" projectLink='https://react-aadesh.vercel.app/' />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-3">
                        <ProjectCard cardTitle="Portfolio website" cardText="This is same website you are viewing now. #Tech stack used : HTML, CSS, JavaScript, Bootstrap, ReactJS" projectLink='/' />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-3">
                        <ProjectCard cardTitle="Vanilla JS Projects" cardText="Few simple vanilla js projects. #Tech stack used : HTML, CSS, Bootstrap, JavaScript" projectLink='https://aadesh-js.vercel.app/' />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-3">
                        <ProjectCard cardTitle="Netflix Homepage" cardText="For Desktop only! Build using Plain HTML & CSS" projectLink='https://netflix-homepage-aadesh.vercel.app/' />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-3">
                        <ProjectCard cardTitle="iworld" cardText="I am currently building this website for my brother's small startup of mobile reselling. #Tech stack used : HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB" projectLink='https://iworld-beta.vercel.app/' />
                    </div>
                </div>
            </div>
        </div>
    )
}
