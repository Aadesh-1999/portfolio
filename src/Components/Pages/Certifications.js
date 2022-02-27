import React from 'react'
import { ProjectCard } from '../ProjectCard'

export const Certifications = () => {
    return (
        <div className='m-5'>
            <h1 className='my-5'>My <span>Certificates</span></h1>
            <div className="certificates my-5 row d-flex justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 my-3 d-flex justify-content-center">
                    <ProjectCard cardTitle="HTML, CSS, Javascript" cardText={<>Authorized by <span>Duke University</span> and offered through <span>Coursera</span></>} projectLink='https://coursera.org/verify/JZW5D5T6RXFM' linkFor="Certificate" />
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3 d-flex justify-content-center">
                    <ProjectCard cardTitle="Advanced Responsive Design" cardText={<>Authorized by <span>University of Michigan</span> and offered through <span>Coursera</span></>} projectLink='https://coursera.org/verify/295GGVF7ZEPX' linkFor="Certificate" />
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3 d-flex justify-content-center">
                    <ProjectCard cardTitle="Interactivity with Javascript" cardText={<>Authorized by <span>University of Michigan</span> and offered through <span>Coursera</span></>} projectLink='https://coursera.org/verify/Z5QZPYZKG2KA' linkFor="Certificate" />
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3 d-flex justify-content-center">
                    <ProjectCard cardTitle="Bootstrap : CSS Framework" cardText={<>Authorized by <span>Hong Kong University Of Science & Technology</span> and offered through <span>Coursera</span></>} projectLink='https://coursera.org/verify/WGCN7A6HGCV4' linkFor="Certificate" />
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3 d-flex justify-content-center">
                    <ProjectCard cardTitle="Git & Github" cardText={<>Authorized by <span>Google</span> and offered through <span>Coursera</span></>} projectLink='https://coursera.org/verify/5VDKUMZ6UK2F' linkFor="Certificate" />
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3 d-flex justify-content-center">
                    <ProjectCard cardTitle="Python" cardText={<>Authorized by <span>Google</span> and offered through <span>Coursera</span></>} projectLink='https://coursera.org/verify/LGCHRUKYE84S' linkFor="Certificate" />
                </div>
            </div>
        </div>
    )
}
