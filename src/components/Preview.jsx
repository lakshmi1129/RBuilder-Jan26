import React from 'react'
import Divider from '@mui/material/Divider';
import { Box, Button } from '@mui/material';


function Preview({resumeData}) {
  return (
    <div className='p-5 m-5 w-100 border border-shadow'>
      <h2>{resumeData?.fullName}</h2>
      <p className='fs-6'>Phone:{resumeData?.phone}</p>
      <p className='fs-6'>Email:{resumeData?.email}</p>
      <p className='fs-6'>LinkedIn: <a href={resumeData?.linkedin}>{resumeData?.linkedin}</a></p>
      <p className='fs-6'>GIthub: <a href={resumeData?.github}>{resumeData?.github}</a> </p>
      <p className='fs-6'>Location: {resumeData?.location}</p>
      <Divider className='bg-dark my-3' />
      <h4 className='mt-3'>Professional Summary</h4>
      <p>{resumeData?.summary}</p>
      <Divider className='bg-dark my-3' />
      <h4 className='mt-3'>Technical Skills</h4>
      {/* duplicate user skill */}
      {
        resumeData?.skills?.map((item,index)=>(
          <Button className='m-2 ' key={index} variant="outlined">{item}</Button>
        ))
      }
      <Divider className='bg-dark my-3' />
      <h4>Education</h4>
      <p className='fs-6'>Bachelor's Degree in <b>{resumeData?.degree}</b></p>
      <p className='fs-6'>University/College : {resumeData?.university}</p>
      <p className='fs-6'>Year of Graduation : {resumeData?.passOut}</p>
      <Divider className='bg-dark my-3' />
    </div>
  )
}

export default Preview