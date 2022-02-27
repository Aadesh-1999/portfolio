import React from 'react';
import resume from '../../Resources/Images/Aadesh_Resume.pdf';

export const Resume = () => {
  return (
    <div className='m-5'>
        <h1>My <span>Resume</span></h1><br />
        <h3>Click <a href={resume} download="aadesh_resume"><span>Here</span></a> to download</h3><br />
        <div>
          <h6>Rendering here if browser supports</h6><br/>
        {/* <object width="90%" height="2000px" data={resume}>Can not render resume on your browser</object>  */}
        <embed src={resume} width="90%" height="2000px"></embed>
        </div>
    </div>
  )
}
