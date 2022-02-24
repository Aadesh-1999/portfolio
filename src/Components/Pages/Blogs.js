import React from 'react'

export const Blogs = () => {
    return (
        <div className='m-5'>
            <h1>I love to write on <span>Twitter!</span></h1><br />
            <h1>Lets connect on <a href="https://twitter.com/aadesh_codes"
                className="Twitter social">
                <i className="fa-brands fa-twitter m-2"></i>
            </a></h1><br />
            <h1>I have recently started writing <span>Tech Blogs</span></h1><br />
            <div>
            <h5 className='my-5'>If doesn't get loaded below then click : <span><a href="https://medium.com/@aadeshrn/execution-context-in-javascript-69e329175da7"><span>Here</span>
            </a></span></h5>
            <iframe title="My Medium Blog" src ="https://medium.com/@aadeshrn/execution-context-in-javascript-69e329175da7" width="100%" height="500"> </iframe>
            </div>
        </div>
    )
}
