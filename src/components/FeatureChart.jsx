import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const FeatureChart = () => {
  const percentage = 66;

  return (
    <div className='shadow-lg p-2 rounded w-10/12 h-72'>
      <div className='flex justify-between'>
        <h1>Total Revenue</h1>
        <span><MoreVertIcon/></span>
      </div>
      <div className='mt-4 flex flex-col justify-center items-center'>
      <CircularProgressbar value={percentage} text={`${percentage}%` } className='w-[200px]'/>
      <p>This is Our Total Revenue</p>
      </div>
    </div>
  )
}

export default FeatureChart