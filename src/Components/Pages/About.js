import React from 'react';
import { Card } from '../Card';
import './styles/about.css';
import vscode from '../../Resources/Images/vscode.svg';
import postman from '../../Resources/Images/postman.svg';
import eclipse from '../../Resources/Images/eclipse.svg';

export const About = () => {
    return (
        <div className='row mx-5 my-5 py-5 d-flex justify-content-center'>
            <div className='about p-5 col-12 img1'>
                <h1>Who I am ?</h1><br /><br /><br />
                <h2>Hi All, I am Aadesh from <span>Pune, Maharashtra</span></h2><br />
                <h2>I am good at <span>HTML, CSS, JavaScript, React</span></h2><br />
                <h2>I am eagerly looking for an opportunity in <span>Web Dev (Frontend)</span></h2><br />
                <h2>Apart from coding, some other activities that I love to do!</h2><br />
                <h3>
                    <ol>
                        <li><h3>Writting Tech Blogs</h3></li>
                        <li><h3>Travelling</h3></li>
                    </ol>
                </h3><br />
            </div><hr />
            <div className='col-12 my-5 skills row d-flex justify-content-around'>
                <h1 className='col-12 my-2'>My Professional <span>Skills</span></h1>
                <div className="col-12 row d-flex justify-content-center my-5 cardLogos">
                    <div className="col-3 px-5">
                        <Card cardImgClass="fa-brands fa-html5" />
                    </div>
                    <div className="col-3 px-5">
                        <Card cardImgClass="fa-brands fa-css3" />
                    </div>
                    <div className="col-3 px-5">
                        <Card cardImgClass="fa-brands fa-js" />
                    </div>
                    <div className="col-3 px-5">
                        <Card cardImgClass="fa-brands fa-bootstrap" />
                    </div>
                    <div className="col-3 px-5">
                        <Card cardImgClass="fa-brands fa-react" />
                    </div>
                    <div className="col-3 px-5">
                        <Card cardImgClass="fa-brands fa-git" />
                    </div>
                    <div className="col-3 px-5">
                        <Card cardImgClass="fa-brands fa-node" />
                    </div>
                    <div className="col-3 px-5">
                        <Card cardImgClass="fa-brands fa-java" />
                    </div>
                    <div className="col-3 px-5">
                        <Card cardImgClass="fa-brands fa-python" />
                    </div>
                </div>
            </div><hr />
            <div className='col-12 my-5 row d-flex justify-content-center'>
                <h1 className='col-12 '><span>Tools</span> I use</h1>
                <div className="col-12 row d-flex justify-content-center my-5 cardLogos">
                    <div className="col-3 px-5">
                        <div className="card d-flex justify-content-center">
                            <div className="card-body d-flex justify-content-center">
                                <h5 className="card-title skill-logo"><img src={vscode} alt="VSCODE" height={"70px"}/></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 px-5">
                        <div className="card d-flex justify-content-center">
                            <div className="card-body d-flex justify-content-center">
                                <h5 className="card-title skill-logo"><img src={postman} alt="postman" height={"70px"}/></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 px-5">
                        <div className="card d-flex justify-content-center">
                            <div className="card-body d-flex justify-content-center">
                                <h5 className="card-title skill-logo"><img src={eclipse} alt="eclipse" height={"70px"}/></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 px-5">
                        <Card cardImgClass="fa-brands fa-github" />
                    </div>
                    <div className="col-3 px-5">
                        <Card cardImgClass="fa-brands fa-unsplash" />
                    </div>
                </div>
            </div>
        </div>
    )
}
