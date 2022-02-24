import React from 'react';
//import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';
import './Styles/intro.css'
export const Intro = () => {
    return (
        <div>
            <div className="salutation mt-5">
                <h1>Hi There! <span className='wave'>👋</span></h1>
                <h1>I'm <span >Aadesh Nirfarake</span></h1>
                <h2 className='mt-4'>
                    <Typewriter
                        options={{
                            strings: ['SDE @ Persistent Systems', 'Web Developer', 'Looking for full time opportunity in Webdev domain'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
            </div>
            <div className="introduction mt-5">
                <h2>My Intro 🤠</h2><br /><br />
                <h4>- BE Computer 2020 batch from <span>MIT College Of Engineering, Kothrud, Pune</span></h4><br />
                <h4>- SDE<span> @ Persistent systems</span></h4><br />
                {/* <h3>I am...</h3><br /> */}
                <h4>- Fluent in <span>HTML, CSS, JavaScript(ES6), Bootstrap5</span></h4><br />
                <h4>- Begineer with <span>ReactJS & NodeJS</span></h4><br />
                <h4>- Love <span>Web Technologies and Product Building</span></h4><br />
                <h4>- Enthusiastic about <span>web3</span></h4><br />
                <h4>- <span>Currently Looking for full time opportunity in Web development (FrontEnd domain)</span></h4><br />
                <br /><br />
            </div>
            <div className="socials my-5">
                <h2>Feel Free to connect with me <span>on</span></h2><br /><br />
                <div className='d-flex justify-content-center align-items-center'>
                    <a href="https://github.com/Aadesh-1999"
                        className="Github social">
                        <i className="fa-brands fa-github m-2"></i>
                    </a>
                    <a href="https://twitter.com/aadesh_codes"
                        className="Twitter social">
                        <i className="fa-brands fa-twitter m-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aadeshnirfarake"
                        className="linkedin social">
                        <i className="fa-brands fa-linkedin m-2"></i>
                    </a>
                    <a href="https://www.instagram.com/aadeshnirfarake"
                        className="instagram social">
                        <i className="fa-brands fa-instagram m-2"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
