import React from 'react';
import resume from '../../Resources/Images/Aadesh_Resume.pdf';

export const Resume = () => {
  return (
    <div className='m-5'>
        <h1>My <span>Resume</span></h1><br />
        <div>
        <embed src={resume} width="90%" height="2000vh" />
        </div>
    </div>
  )
}
