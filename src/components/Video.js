import React from 'react'
import VideoCard from './VideoCard.js'
import '../styles/videos.css'
const Video = ({video}) => {
  return (
    <div className='videos'>
        {
      video.map((item, index)=>(
      <VideoCard key={item.image} name={item.name} index={index} image={item.image} />
      ))}
    </div>
  )
}

export default Video
