import React from 'react';
import PropTypes from 'prop-types';
import './Styles/footer.css'
export const Footer = (props) => {
    let footerStyle = {
        height: "100%", color: "white"
    }

    return (
        <div className='footerParent fixed-bottom mt-5 shadow bg-dark text-white'>
            <footer className='row d-flex jutify-content-centre align-content-centre p-1' style={footerStyle}>
                <div className='col-4'>
                    {props.name} &copy; 2022
                </div>
                <div className='col-4'>
                    {/* &copy; 2022 */}
                </div>
                <div className='col-4 d-flex justify-content-around align-items-center'>
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
            </footer>
        </div>
    )
}

Footer.defaultProps = {
    name: "Aadesh N"
}
Footer.propTypes = {
    name: PropTypes.string
}