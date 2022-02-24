import React from 'react'

export const Contact = () => {
    return (
        <div className='m-5'>
            <h1>You can <span>Reach me</span> through following ways :</h1>
            <div className='my-5' style={{"fontSize":"100px"}}>
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
            <div>
                <h3>I am mostly active on <span>twitter & github</span> only</h3><br />
            </div>
            <div>
                <h1>You can <span>mail me on aadeshrn@gmail.com</span></h1>
            </div>
        </div>
    )
}
