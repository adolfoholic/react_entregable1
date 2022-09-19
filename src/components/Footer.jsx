import React from 'react'

const Footer = () => {
  return (
    <div className="music_box">
        <audio controls autoplay loop>
            <source src="./clasica.mp3" type="audio/mp3"></source>
        </audio>
    </div>
  )
}

export default Footer